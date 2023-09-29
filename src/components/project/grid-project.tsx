import bgImage from "../../common/img/bg-dalle.png";
import Button from "../ui/button";
import Card from "../ui/card";

export function GridProject() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 ">
      <Card>
        <div className="flex flex-row gap-4 h-max">
          <Button kind="default">View Demo</Button>
          <Button kind="default">View Repo</Button>
        </div>
      </Card>
      <Card>
        <div className="flex flex-row gap-4 h-max">
          <Button kind="default">View Demo</Button>
          <Button kind="default">View Repo</Button>
        </div>
      </Card>{" "}
      <Card>
        <div className="flex flex-row gap-4 h-max">
          <Button kind="default">View Demo</Button>
          <Button kind="default">View Repo</Button>
        </div>
      </Card>{" "}
      <Card>
        <div className="flex flex-row gap-4 h-max">
          <Button kind="default">View Demo</Button>
          <Button kind="default">View Repo</Button>
        </div>
      </Card>{" "}
    </div>
  );
}
