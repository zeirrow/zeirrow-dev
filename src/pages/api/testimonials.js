import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const sheetId = process.env.GOOGLE_SHEET_ID;
    const range = "'Form Responses 1'!A:F"; // adjust to your form’s range

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range,
    });

    const rows = response.data.values || [];

    if (rows.length === 0) {
      return res.status(200).json({ data: [] });
    }

    // Extract headers from first row
    const headers = rows[0];

    // Transform the data and remove unwanted fields
    const transformedData = rows.slice(1).map((row) => {
      const obj = {};
      headers.forEach((header, index) => {
        // Only include the fields we want
        if (header !== "Email" && header !== "Phone number") {
          obj[header] = row[index] || ""; // Handle empty cells
        }
      });
      return obj;
    });

    res.status(200).json({ data: transformedData });
  } catch (err) {
    console.error("Google Sheets API error:", err);
    res.status(500).json({ error: err.message });
  }
}
