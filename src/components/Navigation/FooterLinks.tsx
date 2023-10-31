import Link from "next/link";

const FooterLinks = ({ names }: { names: string[] }) => (
  <nav className="list-none">
    {names.map((name) => (
      <li key={name}>
        <Link
          className="text-gray-500 hover:text-gray-200 transition"
          href="/"
        >
          {name}
        </Link>
      </li>
    ))}
  </nav>
);

export default FooterLinks;
