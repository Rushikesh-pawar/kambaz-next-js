"use client";
import Link from "next/link";

export default function InboxPage() {
  return (
    <div style={{ maxWidth: 900 }} className="p-4">
      <h1>Inbox</h1>
      <p>This is a placeholder Inbox page. Replace with real content as needed.</p>
      <p><Link href="/Dashboard">Back to Dashboard</Link></p>
    </div>
  );
}
