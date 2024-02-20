export function App() {
  return (
    <main className="bg-zinc-900 max-h-dvh h-dvh overflow-hidden w-screen flex flex-col justify-center items-center gap-12">
      <h1 className="text-5xl font-bold text-zinc-300 font-mono">Demo App</h1>

      <div className="flex flex-col gap-4">
        <button className="bg-orange-400 px-6 py-3 rounded-lg font-medium font-mono">
          Ask for permission
        </button>

        <button className="bg-blue-400 px-6 py-3 rounded-lg font-medium font-mono">
          Notify me
        </button>
      </div>
    </main>
  );
}
