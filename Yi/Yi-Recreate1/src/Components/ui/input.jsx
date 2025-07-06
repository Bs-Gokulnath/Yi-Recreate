import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
      {...props}
    />
  );
}
