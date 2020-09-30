import Link from "next/link";

export default function (props) {
  return (
    <Link href={`/docs/${props.name}/`}>
      <a>
        <div className="cursor-pointer shadow-md hover:shadow-lg rounded-lg bg-gray-100 overflow-hidden">
          <h1 className="font-bold">{props.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            rerum dolores quo dolore assumenda ipsam, adipisci debitis soluta
            veniam libero autem aut, quod accusamus maxime commodi voluptatem
            suscipit explicabo sint.
          </p>
        </div>
      </a>
    </Link>
  );
}
