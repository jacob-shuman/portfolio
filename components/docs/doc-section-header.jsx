import Link from "next/link";

export default function (props) {
  return (
    <div>
      <h1 className="text-6xl font-bold text-gray-500 text-left">
        {props.title}
      </h1>
    </div>
  );
}
