import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: "Zeirrow.dev <onboarding@resend.dev>",
      to: "udodirimwisdom@gmail.com",
      subject: `New message from ${name}`,
      html: `
      <div style="font-family: sans-serif; padding: 1rem; background-color: #f9fafb; color: #111827;">
        <h2 style="color: #06b6d4;">New Message from Your Portfolio</h2>
        <p><strong style="display:inline-block; min-width:70px;">Name:</strong> ${name}</p>
        <p><strong style="display:inline-block; min-width:70px;">Email:</strong> ${email}</p>
        <p style="margin-top:1rem;"><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background-color: #e5e7eb; padding: 1rem; border-radius: 0.5rem;">
          ${message}
        </p>
        <hr style="margin-top: 2rem;" />
        <p style="font-size: 0.875rem; color: #6b7280;">This message was sent from your portfolio contact form.</p>
      </div>
    `,
    });

    if (response.error) {
      console.error("❌ Resend error:", response.error);
      return res
        .status(500)
        .json({ success: false, message: "Email service failed." });
    }

    console.log("✅ Email sent:", response.id);
    return res.status(200).json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error("❌ Caught error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
}
