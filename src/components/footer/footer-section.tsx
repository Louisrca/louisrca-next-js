import { GithubIcon } from "@/common/svg/github-icon";
import { LinkedinIcon } from "@/common/svg/linkedin-icon";
import Link from "next/link";

export default function Footer() {
  return (
    <section
      className="flex justify-center items-center space-x-20 flex-row w-full h-screen bg-indigo-400 text-green-400"
      id="contact"
    >
      <div>
        <Link href={"https://github.com/Louisrca/"} target={"_blank"}>
          {" "}
          <span>
            <GithubIcon />
          </span>
          <span>Louisrca</span>
        </Link>
      </div>
      <div>
        <Link
          href={"https://www.linkedin.com/in/louisrocca/"}
          target={"_blank"}
        >
          <span>
            <LinkedinIcon />
          </span>
          <span>louisrocca</span>
        </Link>
      </div>
      <div className="text-lg"> © 2023 - Louis Rocca </div>
    </section>
  );
}
