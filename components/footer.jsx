import Link from "next/link";

export default function ({ name, tags }) {
  return (
    <footer className="bg-transparent flex">
      <Link href="/">
        <h1 className="pl-4 text-gray-500 cursor-pointer hover:text-gray-400 my-auto">
          Jacob Shuman
        </h1>
      </Link>
      <Link href="/docs">
        <a className="h-full inline-block align-middle py-2 px-4 hover:text-gray-600 text-gray-700 ml-2">
          Docs
        </a>
      </Link>
    </footer>
  );
}
