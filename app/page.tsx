import Image from "next/image";
import PrimaryNavigation from "../components/global/navigation/primaryNavigation";

export default function Home() {
  return (
    <>
      <nav>
        <PrimaryNavigation />
      </nav>
      <h1 className="text-center">Aaron K. Altman</h1>
      <h2>Software Engineer</h2>
    </>
  );
}
