export default function TechCard({ name, tags }) {
  return (
    <div className="h-full w-full bg-gray-900 shadow-lg rounded px-4 py-2 mx-4">
      <h1 className="text-white text-2xl font-semibold">{name}</h1>

      <div className="grid gap-4 place-items-center grid-cols-4 sm:grid-cols-3">
        {tags.map((t) => (
          <span className="bg-gray-700 rounded-full text-gray-400 m-2 py-2 px-4">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
