import Link from "next/link";

export default function DocBody(props) {
  return (
    <div className="px-4 text-lg font-semibold text-left text-gray-700">
      {props.children}
    </div>
  );
}
