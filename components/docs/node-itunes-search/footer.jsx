import Link from "next/link";

export default function () {
  return (
    <footer className="flex py-2 border border-t-8 border-gray-700 bg-transparent">
      <Link href="/">
        <button className="cursor-pointer pl-4 my-auto text-gray-600  hover:text-gray-500 focus:text-gray-700">
          Jacob Shuman
        </button>
      </Link>
      <Link href="/docs">
        <button className="h-full inline-block align-middle py-2 px-4 ml-2 text-gray-700 hover:text-gray-600 focus:text-gray-800">
          Docs
        </button>
      </Link>
    </footer>
  );
}
