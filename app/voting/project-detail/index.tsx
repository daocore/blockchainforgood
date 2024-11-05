export function ProjectDetail({
  name,
  intro,
}: {
  name: string;
  intro: string;
}) {
  return (
    <div className="h-full flex items-center">
      <div className="">
        <div className="text-center text-4xl font-bold text-oscarActive my-2">
          {name}
        </div>
        <div className="text-white text-lg">{intro}</div>
      </div>
    </div>
  );
}
