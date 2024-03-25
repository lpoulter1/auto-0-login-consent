export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <form action="" className="flex flex-col gap-4">
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
    </main>
  );
}
