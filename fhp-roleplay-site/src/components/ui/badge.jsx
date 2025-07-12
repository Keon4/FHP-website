import React from "react";

export const Badge = ({ children, className = "", variant = "default" }) => (
  <span className={`inline-block px-3 py-1 rounded text-sm ${className}`}>{children}</span>
);