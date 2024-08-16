import { Focus } from "./focus";
import { HackathonList } from "./hackathon-list";
import { Join } from "./join";
import { Team } from "./team";

export default function HackathonPage() {
  return (
    <div className="w-full md:w-content">
      <Focus />
      <Join />
      <HackathonList />
      <Team />
    </div>
  );
}
