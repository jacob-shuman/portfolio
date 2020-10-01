import DocSectionHeader from "../../components/docs/doc-section-header";
import DocSectionSubHeader from "../../components/docs/doc-section-sub-header";
import DocBody from "../../components/docs/doc-body";

import NISDHeader from "../../components/docs/node-itunes-search/header";
import NISDFooter from "../../components/docs/node-itunes-search/footer";

export default function () {
  return (
    <div className="h-screen flex flex-col bg-gray-900">
      <NISDHeader />

      <div className="flex-1 overflow-y-auto text-center">
        <div className="p-4 bg-gray-900">
          <a id="top" />

          <DocSectionHeader>
            What is{" "}
            <span className="px-2 font-mono text-gray-400 rounded-lg bg-gray-800">
              node-itunes-search
            </span>{" "}
            ?
          </DocSectionHeader>
          <DocBody>
            The iTunes Search API is a publicly available API hosted by Apple
            which streams Metadata. This wrapper uses the phin npm package to
            make HTTP requests to the API.
          </DocBody>

          <a id="install" />
          <DocSectionHeader>Install</DocSectionHeader>

          <p className="px-2 py-2 w-full lg:w-1/2 text-lg text-gray-400 text-left font-mono rounded-lg bg-gray-700">
            $ npm i node-itunes-search
          </p>

          <a id="import" />
          <DocSectionHeader>Import</DocSectionHeader>

          <DocSectionSubHeader>Commonjs</DocSectionSubHeader>
          <p className="px-2 py-2 w-full lg:w-1/2 text-lg text-gray-400 text-left font-mono rounded-lg bg-gray-700">
            {'const itunesAPI = require("node-itunes-search");'}
          </p>

          <DocSectionSubHeader>ES6</DocSectionSubHeader>
          <p className="px-2 py-2 w-full lg:w-1/2 text-lg text-gray-400 text-left font-mono rounded-lg bg-gray-700">
            {'import {ItunesSearchOptions} from "node-itunes-search";'}
          </p>

          <DocSectionSubHeader>Default Namespace</DocSectionSubHeader>
          <p className="px-2 py-2 w-full lg:w-1/2 text-lg text-gray-400 text-left font-mono rounded-lg bg-gray-700">
            {'import ItunesSearch from "node-itunes-search";'}
          </p>

          <a id="usage" />
          <DocSectionHeader>Usage</DocSectionHeader>

          <DocBody>
            The module exposes 2 functions searchItunes and lookupItunes which
            can be used to search and lookup content using the Itunes Search API
            respectively.
          </DocBody>

          <br />

          <DocBody>
            Both of these functions use vanilla javascript promises which, when
            successful, will return an ItunesResult.
          </DocBody>

          <br />

          <DocBody>
            Note Versions 1.2.0 and higher now have a simpler syntax.
          </DocBody>

          <a id="api" />
          <DocSectionHeader>API</DocSectionHeader>

          <a id="contributing" />
          <DocSectionHeader>Contributing</DocSectionHeader>
          <DocBody>
            Feel free to make an issue or pull request. My schedule is pretty
            open and I will be more than happy to review any requests or answer
            any questions you may have!
          </DocBody>

          <a id="examples" />
          <DocSectionHeader>Examples</DocSectionHeader>
        </div>
      </div>

      <NISDFooter />
    </div>
  );
}
