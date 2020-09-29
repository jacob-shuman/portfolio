import TechCard from "./tech-card";

export default function UsedTech() {
  const tech = [
    { name: "Node.js", tags: ["javascript", "framework"] },
    { name: "Ionic", tags: ["mobile", "web", "javascript", "framework"] },
    { name: "Angular", tags: ["web", "framework"] },
    { name: "Javascript", tags: ["web", "language"] },
    { name: "TypeScript", tags: ["web", "language"] },
    { name: "Flutter", tags: ["mobile", "dart", "framework"] },
    { name: "Dart", tags: ["mobile", "flutter", "language"] },
  ];

  return (
    <div>
      <div className="flex">
        <h1 className="mx-auto text-4xl text-white font-bold">
          Technology I Work With
        </h1>
      </div>

      <div className="place-items-center grid  gap-4 grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-4">
        {tech.map((t) => (
          <TechCard name={t.name} tags={t.tags} />
        ))}
      </div>
    </div>
  );
}
