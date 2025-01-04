import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <nav className="mb-10 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <h1 className="text-2xl">Portfolio</h1>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <Link href="https://www.linkedin.com/in/anil-kumar-singh-kushwaha-53b967104/">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/anil9450">
            <FaGithub />
          </Link>
          <FaInstagram />
          <FaSquareXTwitter />
        </div>
      </nav>
    </>
  );
}
