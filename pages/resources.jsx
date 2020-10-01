import ResourceCard from "../components/resource-card";
import { GoPaintcan } from "react-icons/go";

const resources = [
  { title: "css.gg", description: "", url: "https://css.gg/" },
  { title: "Carbon", description: "", url: "https://carbon.now.sh/" },
  { title: "unDraw", description: "", url: "https://undraw.co/" },
];

export default function ResourcesPage(props) {
  let isLoading = true;

  return (
    <div>
      <h1>Resources</h1>
      <h2>A collection of my favourite sites and tools</h2>
      <h3>Tools</h3>
      <h3>Hidden Gems</h3>
      <ul>
        {resources.map((r, i) => {
          return <ResourceCard key={i} resource={r} icon={<GoPaintcan />} />;
        })}
      </ul>
    </div>
  );
}
