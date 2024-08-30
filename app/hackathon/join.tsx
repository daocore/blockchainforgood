import Link from "next/link";

export function Join() {
  return (
    <div className="w-full bg-white text-center py-10 px-4 md:px-0">
      <h2 className="text-3xl font-bold mb-4">
        Join the BGA Hackathon Initiative
      </h2>
      <p className="w-full md:w-2/4 max-w-[900px] mx-auto text-typography">
        Inspired by the{" "}
        <Link className="text-main" href={"https://sdgs.un.org/goals"}>
          United Nations' 17 Sustainable Development Goals
        </Link>
        , we unite tech enthusiasts from around the globe to tackle real-world
        problems. Spark innovation, collaborate on a global scale, and create
        lasting social impact through the BGA Track. <br />
        Be part of the movement for change — join us today!
      </p>
    </div>
  );
}
