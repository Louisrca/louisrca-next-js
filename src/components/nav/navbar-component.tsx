import Link from "next/link";
import Button from "../ui/button";
export function NavBar() {
  return (
    <header className="w-full bg-transparent absolute p-4">
      <nav className="flex justify-end m-4">
        <Link className="duration-600" href={"#contact"}>
          <Button kind="nav">Contact</Button>
        </Link>
        <Link className="duration-600" href={"#project"}>
          <Button kind="nav">Project</Button>
        </Link>
      </nav>
    </header>
  );
}
