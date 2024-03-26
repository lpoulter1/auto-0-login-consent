"use client";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const auth0_domain = searchParams.get("auth0_domain");
  const state = searchParams.get("state");
  // console.log("sent from autho auth0_domain", auth0_domain);
  // auth0_domain = "d74rdvlpg8gop1id.us.auth0.com";

  //dev-d74rdvlpg8gop1id.us.auth0.com
  const action = `https://${auth0_domain}?state=${state}`;
  console.log("auth0_domain", auth0_domain);
  console.log("state", state);
  console.log("action", action);
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <form action={action} className="flex flex-col gap-4">
        <label htmlFor="consent" className="flex gap-2">
          I consent
          <input type="checkbox" />
        </label>
        <button
          type="submit"
          className="px-4 py-2 border border-gray-400 hover:bg-gray-700 hover:text-white"
        >
          Submit
        </button>
      </form>
      <div>auth0_domain: {auth0_domain}</div>
      https://{auth0_domain}/continue?state={state}
      <div>state: {state}</div>
      <div>action: {action}</div>
    </main>
  );
}
