"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print font-semibold px-6 py-3 rounded-lg text-sm transition-opacity hover:opacity-85"
      style={{ backgroundColor: "#C77F4A", color: "#fff" }}
    >
      Print / Save as PDF
    </button>
  );
}
