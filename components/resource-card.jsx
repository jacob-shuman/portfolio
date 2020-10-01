export default function ResourceCard(props) {
  const { title, description, url } = props.resource;
  const icon = props.icon;

  return (
    <div>
      {icon}
      <a href={url}>asdf</a>
    </div>
  );
}
