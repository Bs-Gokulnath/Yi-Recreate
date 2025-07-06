import React from "react";

export function Checkbox({ id, className = "", ...props }) {
  return (
    <input
      type="checkbox"
      id={id}
      className={`h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 ${className}`}
      {...props}
    />
  );
}
