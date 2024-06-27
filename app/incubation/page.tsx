import { ContactUs } from "./contact-us";
import { Dimension } from "./dimension";
import { Flow } from "./flow";
import { Hero } from "./hero";
import { Industries } from "./industries";

export default function IncubationPage() {
  return (
    <div className="w-full bg-incubation">
      <Hero />
      <Industries />
      <Flow />
      <Dimension />
      <ContactUs />
    </div>
  );
}
