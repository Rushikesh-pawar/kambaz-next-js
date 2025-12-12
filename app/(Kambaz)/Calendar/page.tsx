"use client";
import Link from "next/link";

export default function CalendarPage() {
  return (
    <div style={{ maxWidth: 900 }} className="p-4">
      <h1>Calendar</h1>
      <p>This is a placeholder Calendar page. Replace with calendar UI as needed.</p>
      <p><Link href="/Dashboard">Back to Dashboard</Link></p>
    </div>
  );
}
