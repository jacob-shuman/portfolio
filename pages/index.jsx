import Link from "next/link";
import { SiGithub, SiNpm } from "react-icons/si";
import UsedTech from "../components/used-tech";

export default function Home() {
  return (
    <div className="h-screen bg-gray-800">
      {/* <nav className="flex bg-gray-800">
        <a>Home</a>
        <a>Bookmarks</a>
        <a>Blog</a>
      </nav> */}
      <div className="flex mb-8 px-4 py-2">
        <Link href="mailto:mail@jacob.shuman.ca" download>
          <button className="text-white text-center px-4 py-2 mr-4 bg-gray-900 hover:bg-gray-700 rounded-full">
            <h1 className="my-auto">Email</h1>
          </button>
        </Link>

        <Link href="/Jacob-Shuman_Resume.pdf" download>
          <button className="text-white text-center px-4 py-2 mr-4 bg-gray-900 hover:bg-gray-700 rounded-full">
            <h1 className="my-auto">Resume</h1>
          </button>
        </Link>

        <Link href="https://github.com/jacob-shuman">
          <button className="flex text-white text-center px-4 py-2 mr-4 bg-gray-900 hover:bg-gray-700 rounded-full">
            <SiGithub className="my-auto mr-4" />
            <h1>GitHub</h1>
          </button>
        </Link>

        <Link href="https://www.npmjs.com/~jacob.shuman">
          <button className="flex text-white text-center px-4 py-2 mr-4 bg-gray-900 hover:bg-gray-700 rounded-full">
            <SiNpm className="my-auto mr-4" />
            <h1>NPM</h1>
          </button>
        </Link>

        <Link href="docs" download>
          <button className="text-white text-center px-4 py-2 mr-4 bg-gray-900 hover:bg-gray-700 rounded-full">
            <h1 className="my-auto">Project Documentation</h1>
          </button>
        </Link>
      </div>

      <div className="h-full p-4">
        <h1 class="text-6xl font-bold text-blue-500">
          Jacob Shuman
          <br />
          <span>Software Developer</span>
        </h1>

        <UsedTech />
      </div>
    </div>
  );
}
