import UsedTech from "../components/used-tech";

export default function Home() {
  return (
    <div className="h-screen bg-black">
      {/* <nav className="flex bg-white">
        <a>Home</a>
        <a>Bookmarks</a>
        <a>Blog</a>
      </nav>

      <div className="p-5 bg-gray-700">
        <button className="bg-green-500 rounded-full py-4 px-8 shadow-lg text-white hover:bg-green-400">
          Button
        </button>
        <a href="/Jacob-Shuman_Resume.pdf" download>
          Resume
        </a>
        <h2 class="text-6xl font-bold text-blue-500">
          Jacob Shuman
          <br />
          <span>Software Developer</span>
        </h2>
      </div> */}

      <UsedTech />
    </div>
  );
}
