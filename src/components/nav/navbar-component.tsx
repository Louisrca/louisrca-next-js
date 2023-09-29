import Link from "next/link";
import Button from "../ui/button";
export function NavBar() {
  return (
    <header className="p-4">
      <nav className="flex justify-end m-4">
        <Button kind="nav">Contact</Button>
        <Link className="duration-600" href={"#project"}>
          <Button kind="nav">Project</Button>
        </Link>
      </nav>
    </header>
  );
}
