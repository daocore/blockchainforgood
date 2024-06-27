import { Committee } from "./committee";
import { EntryPoints } from "./entry-point";

export function Flow() {
  return (
    <div className="w-full md:w-content mx-auto mb-16 px-4 md:px-0 will-change">
      <EntryPoints />
      <Committee />
    </div>
  );
}
