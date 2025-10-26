// components/Logo.jsx - Option 1
"use client";

export default function Logo({ className = "w-6 h-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simple LC letters */}
      <path
        d="M25 25 L25 75 L45 75 L45 45 L55 45 L55 25 Z"
        fill="currentColor"
      />
      <path
        d="M55 25 L75 25 L75 75 L55 75 L55 55 L65 55 L65 45 L55 45 Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}
