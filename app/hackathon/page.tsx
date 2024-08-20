import { ContactUs } from "./contact-us";
import { Focus } from "./focus";
import { HackathonList } from "./list";
import { Join } from "./join";

export default function HackathonPage() {
  return (
    <div className="w-full">
      <Focus />
      <Join />
      <HackathonList />
      <ContactUs />
    </div>
  );
}
