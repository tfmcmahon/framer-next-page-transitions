import Link from "next/link";

const FooterLinks = ({ names }: { names: string[] }) => (
  <nav className="list-none">
    {names.map((name) => (
      <li key={name}>
        <div className="text-gray-500 hover:text-gray-200 transition">
          {name}
        </div>
      </li>
    ))}
  </nav>
);

export default FooterLinks;
