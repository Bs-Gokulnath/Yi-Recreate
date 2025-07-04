import React from "react";

export function Button({ children, className = "", size = "md", ...props }) {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      className={`rounded bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
