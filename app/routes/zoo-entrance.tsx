import type { Route } from "./+types/zoo-entrance";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nano Zoo Eingang" },
    { name: "description", content: "Willkommen im Nano Monster Zoo." },
  ];
}

export default function ZooEntrance() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <img
          src="/images/NanoZoo_Entrance_Header_small.jpg"
          alt="Eingang des Nano Monster Zoos mit Kindern und Ticketschalter"
          className="w-full rounded-2xl border border-slate-200 shadow-sm"
        />
      </section>
    </main>
  );
}
