import React from "react";

export const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse bg-gray-700 rounded ${className}`}></div>
);