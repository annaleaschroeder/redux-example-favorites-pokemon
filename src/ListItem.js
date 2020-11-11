export function ListItem({ name, onClick }) {
  return (
    <li onClick={onClick}>
      {name}
    </li>
  )
}
