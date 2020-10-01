import Link from "next/link";

import { CgDarkMode, CgNpm } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";

export default function () {
  return (
    <header className="border border-b-8 border-gray-700">
      <nav>
        <ul className="flex justify-between py-4 px-4">
          <li className="flex justify-around text-gray-100">
            <Link href="#top">
              <button className="text-xl font-mono font-bold text-gray-600 hover:text-gray-500 focus:text-gray-700">
                node-itunes-search
              </button>
            </Link>

            <Link href="#install">
              <button className="ml-8 font-mono text-left text-gray-700 hover:text-gray-600 focus:text-gray-800">
                Install
              </button>
            </Link>

            <Link href="#import">
              <button className="ml-8 font-mono text-left text-gray-700 hover:text-gray-600 focus:text-gray-800">
                Import
              </button>
            </Link>

            <Link href="#usage">
              <button className="ml-8 font-mono text-left text-gray-700 hover:text-gray-600 focus:text-gray-800">
                Usage
              </button>
            </Link>

            <Link href="#api">
              <button className="ml-8 font-mono text-left text-gray-700 hover:text-gray-600 focus:text-gray-800">
                API
              </button>
            </Link>

            <Link href="#contributing">
              <button className="ml-8 font-mono text-left text-gray-700 hover:text-gray-600 focus:text-gray-800">
                Contributing
              </button>
            </Link>

            <Link href="#examples">
              <button className="ml-8 font-mono text-left text-gray-700 hover:text-gray-600 focus:text-gray-800">
                Examples
              </button>
            </Link>
          </li>

          <li>
            <button
              className="h-full inline-block align-middle py-2 px-4 ml-2 rounded-full text-white bg-gray-700 hover:bg-gray-600 focus:bg-gray-800"
              onClick={() => {}}
            >
              <CgDarkMode />
            </button>

            <a
              href="https://www.npmjs.com/package/node-itunes-search"
              className="h-full inline-block align-middle py-2 px-4 ml-2 rounded-full text-white bg-gray-700 hover:bg-gray-600 focus:bg-gray-800"
            >
              <CgNpm />
            </a>

            <a
              href="https://github.com/jacob-shuman/node-itunes-search"
              className="h-full inline-block align-middle py-2 px-4 ml-2 rounded-full text-white bg-gray-700 hover:bg-gray-600 focus:bg-gray-800"
            >
              <FiGithub />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
