"use client";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const redirect_uri = searchParams.get("redirect_uri");
  const state = searchParams.get("state");
  const action = `${redirect_uri}?state=${state}`;
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <form action={action} method="post" className="flex flex-col gap-4">
        <label htmlFor="consent" className="flex gap-2">
          I consent
          <input type="checkbox" name="consent" value="yes" />
        </label>
        <button
          type="submit"
          className="px-4 py-2 border border-gray-400 hover:bg-gray-700 hover:text-white"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
