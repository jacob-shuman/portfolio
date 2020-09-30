import Link from "next/link";
import { CgNpm } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";

import DocSectionHeader from "../../components/docs/doc-section-header";
import JASFooter from "../../components/footer";

export default function nodeItunesSearchDocs() {
  return (
    <div className="bg-gray-900 h-screen">
      <header>
        <nav>
          <ul className="flex justify-between py-4 px-4">
            <li className="text-gray-100">
              <h1>node-itunes-search</h1>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/node-itunes-search"
                className="h-full inline-block align-middle rounded-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white ml-2"
              >
                <CgNpm />
              </a>

              <a
                href="https://github.com/jacob-shuman/node-itunes-search"
                className="h-full inline-block align-middle rounded-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white ml-2"
              >
                <FiGithub />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="grid grid-cols-6 text-center">
        <div className="hidden xl:visible lg:visible md:visible md:block bg-gray-800">
          <div className="grid grid-cols-1 py-4 px-2 gap-2">
            <Link href="#">
              <a className="pl-2 text-left text-gray-500 hover:text-gray-400">
                Setup
              </a>
            </Link>

            <Link href="#">
              <a className="pl-8 text-left text-gray-600 hover:text-gray-400">
                Install
              </a>
            </Link>

            <Link href="#">
              <a className="pl-8 text-left text-gray-600 hover:text-gray-400">
                Import
              </a>
            </Link>

            <Link href="#">
              <a className="pl-2 text-left text-gray-500 hover:text-gray-400">
                Usage
              </a>
            </Link>

            <Link href="#">
              <a className="pl-2 text-left text-gray-500 hover:text-gray-400">
                API
              </a>
            </Link>
            <Link href="#">
              <a className="pl-2 text-left text-gray-500 hover:text-gray-400">
                Examples
              </a>
            </Link>
          </div>
        </div>
        <div className="col-span-6 md:col-span-5 lg:col-span-5 xl:col-span-5 bg-gray-900 border-dashed border-t-8 border-gray-800 p-4">
          <DocSectionHeader title="Header" />
        </div>
      </div>

      <JASFooter></JASFooter>
    </div>
  );
}
