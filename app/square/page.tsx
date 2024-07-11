import { Content } from "./content";
import { Hero } from "./hero";

export default function SuqarePage() {
  return (
    <div className="w-full md:w-content mx-auto px-4 md:px-0">
      <Hero />
      <Content />
    </div>
  );
}
