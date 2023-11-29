import Link from "next/link";

const PrimaryNavigation = () => {
  return (
    <div>
      <ul className="flex flex-col p-8 md:flex-row">
        <li className="p-2">
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li className="p-2">
          <Link href="/about">
            <p>About</p>
          </Link>
        </li>
        <li className="p-2">
          <Link href="/contact">
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PrimaryNavigation;
