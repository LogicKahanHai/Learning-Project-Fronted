import type { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus-ring-blue-500 focus:border-transparent transition-all outline-none"
    />
  );
}
