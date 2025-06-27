import { motion } from "framer-motion";
import { Trash2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden"
    >
      <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-all duration-200">
        <button
          onClick={() => onToggle(todo.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
            todo.completed
              ? "bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500 shadow-lg shadow-purple-200"
              : "border-gray-300 hover:border-purple-400"
          }`}
        >
          {todo.completed && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Check size={14} className="text-white" />
            </motion.div>
          )}
        </button>

        <span
          className={`flex-1 transition-all duration-200 ${
            todo.completed
              ? "text-gray-500 line-through opacity-75"
              : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDelete(todo.id)}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 h-auto"
        >
          <Trash2 size={16} />
        </Button>
      </div>
    </motion.div>
  );
}
