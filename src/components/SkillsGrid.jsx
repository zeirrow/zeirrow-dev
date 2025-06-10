// components/SortableSkillsGrid.tsx
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { motion } from "framer-motion";

function SortableSkill({ skill, id }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: "grab",
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      whileHover={{ y: -5 }}
      className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg border border-gray-800 hover:border-cyan-400/30 transition-colors"
    >
      <skill.icon className="text-4xl" style={{ color: skill.color }} />
      <span className="mt-2 text-sm">{skill.name}</span>
    </motion.div>
  );
}

export default function SortableSkillsGrid({ initialSkills }) {
  const [skills, setSkills] = useState(initialSkills);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = skills.findIndex((s) => s.name === active.id);
    const newIndex = skills.findIndex((s) => s.name === over.id);

    setSkills((skills) => arrayMove(skills, oldIndex, newIndex));
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={skills.map((s) => s.name)} strategy={verticalListSortingStrategy}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <SortableSkill key={skill.name} id={skill.name} skill={skill} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
