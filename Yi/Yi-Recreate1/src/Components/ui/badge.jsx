import React from "react";
import clsx from "clsx";

export function Badge({ children, className = "", variant = "default" }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variant === "default" && "bg-orange-600 text-white",
        variant === "outline" && "border border-orange-200 text-orange-600",
        className
      )}
    >
      {children}
    </span>
  );
}
