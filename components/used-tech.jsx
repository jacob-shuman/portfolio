import TechCard from "./tech-card";

import {
  SiNodeDotJs,
  SiIonic,
  SiAngular,
  SiJavascript,
  SiTypescript,
  SiFlutter,
  SiDart,
} from "react-icons/si";

export default function UsedTech() {
  const tech = [
    {
      name: "Node.js",
      color: "green-500",
      hoverColor: "green-600",
      icon: SiNodeDotJs,
      url: "https://nodejs.org/en/",
      tags: ["javascript", "framework"],
    },
    {
      name: "Ionic",
      color: "blue-500",
      hoverColor: "blue-600",
      icon: SiIonic,
      url: "https://ionicframework.com/",
      tags: ["mobile", "web", "javascript", "framework"],
    },
    {
      name: "Angular",
      color: "red-500",
      hoverColor: "red-600",
      icon: SiAngular,
      url: "https://angular.io/",
      tags: ["web", "framework"],
    },
    {
      name: "Javascript",
      color: "yellow-500",
      hoverColor: "yellow-600",
      icon: SiJavascript,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      tags: ["web", "language"],
    },
    {
      name: "TypeScript",
      color: "blue-600",
      hoverColor: "blue-700",
      icon: SiTypescript,
      url: "https://www.typescriptlang.org/",
      tags: ["web", "language"],
    },
    {
      name: "Flutter",
      color: "blue-400",
      hoverColor: "blue-500",
      icon: SiFlutter,
      url: "https://flutter.dev/",
      tags: ["mobile", "dart", "framework"],
    },
    {
      name: "Dart",
      color: "blue-400",
      hoverColor: "blue-500",
      icon: SiDart,
      url: "https://dart.dev/",
      tags: ["mobile", "flutter", "language"],
    },
  ];

  return (
    <div>
      <div className="flex">
        <h1 className="mx-auto text-4xl text-white font-bold">
          Technology I'm Using
        </h1>
      </div>

      <div className="place-items-center grid  gap-4 grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-4">
        {tech.map((t) => (
          <TechCard tech={t} />
        ))}
      </div>
    </div>
  );
}
