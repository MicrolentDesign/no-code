import "./IconList.css";
import Icon from "./Icon";

export default function IconList({ items, icon = "Check" }) {
  return (
    <ul className="icon-list">
      {items.map((it) => (
        <li key={it}>
          <span className="icon-list__ic">
            <Icon name={icon} size={13} strokeWidth={3} />
          </span>
          {it}
        </li>
      ))}
    </ul>
  );
}
