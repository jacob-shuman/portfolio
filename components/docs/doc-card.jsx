import Link from "next/link";

export default function DocCard(props) {
  return (
    <Link href={`/docs/${props.name}/`}>
      <a>
        <div className="cursor-pointer shadow-md hover:shadow-lg rounded-lg bg-gray-100 overflow-hidden">
          <h1 className="font-bold">{props.name}</h1>
          <p>{props.description}</p>
        </div>
      </a>
    </Link>
  );
}
