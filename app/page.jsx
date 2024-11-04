"use client";
import upload from "@/actions/upload";

const Home = () => {
  return (
    <div>
      <form action={upload}>
        <input type="file" name="file" />
        <button type="submit" className="bg-white w-15 text-black px-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
