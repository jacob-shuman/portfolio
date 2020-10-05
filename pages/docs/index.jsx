import DocCard from "../../components/docs/doc-card";

export default function () {
  return (
    <div className="mx-4">
      <h1 className="text-6xl font-bold">Documentation</h1>
      <h2 className="text-4xl font-semibold">
        Documentation for projects i've built
      </h2>
      <DocCard
        name="node-itunes-search"
        description="A simple NodeJS wrapper for the iTunes Search API."
      />
    </div>
  );
}
