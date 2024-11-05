"use client";
import upload from "@/actions/upload";

import Link from "next/link";

const Home = () => {
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
};

export default Home;
