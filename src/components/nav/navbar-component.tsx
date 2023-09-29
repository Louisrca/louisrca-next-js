import Button from "../ui/button";
export function NavBar() {
  return (
    <header className="p-4">
      <nav className="flex justify-end m-4">
        <Button kind="nav">Moi</Button>
        <Button kind="nav">Project</Button>
      </nav>
    </header>
  );
}
