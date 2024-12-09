"use client";

import Link from "next/link";
import upload from "@/actions/upload";

export default function Dashboard() {
  return (
    <div>
      <form action={upload}>
        <input type="file" name="file" />
        <button type="submit" className="bg-white w-15 text-black px-2">
          Submit
        </button>
      </form>
      <Link href="/api/post">Export</Link>
    </div>
  );
}
