import "./Header.css";

interface HeaderProps {
  title: string;
  phone_number: number;
}

export default function Header(props: HeaderProps) {
  return (
    <div className="header">
      <p>{props.title}</p>
      <p>+420 {props.phone_number}</p>
    </div>
  );
}
