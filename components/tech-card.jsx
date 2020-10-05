import Link from "next/link";

export default function TechCard(props) {
  const {
    name,
    color = "gray-500",
    hoverColor = "gray-600",
    icon,
    url,
    tags,
  } = props.tech;

  return (
    <Link href={url || ""}>
      <button
        className={`h-full w-full bg-gray-900 shadow-lg rounded px-4 py-2 mx-4 bg-${color} hover:bg-${hoverColor}`}
      >
        <div className="flex">
          {icon({ className: "h-8 w-8 mr-4 my-auto text-white" })}
          <h1 className="text-white text-2xl font-bold">{name}</h1>
        </div>

        {/* <div className="grid gap-4 place-items-center grid-cols-4 sm:grid-cols-3">
        {tags.map((t) => (
          <span className="bg-gray-700 rounded-full text-gray-400 m-2 py-2 px-4">
          {t}
          </span>
          ))}
        </div> */}
      </button>
    </Link>
  );
}
