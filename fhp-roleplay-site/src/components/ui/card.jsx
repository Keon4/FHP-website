import React from "react";

export const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg p-4 shadow-md ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

export const CardHeader = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

export const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-bold ${className}`}>{children}</h3>
);