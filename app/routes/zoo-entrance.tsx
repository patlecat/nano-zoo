import type { Route } from "./+types/zoo-entrance";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nano Zoo Entrance" },
    { name: "description", content: "Welcome to Nano Monster Zoo." },
  ];
}

export default function ZooEntrance() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <img
          src="/images/NanoZoo_Entrance_Header_small.jpg"
          alt="Nano Monster Zoo entrance with kids and ticket booth"
          className="w-full rounded-2xl border border-slate-200 shadow-sm"
        />
      </section>
    </main>
  );
}
