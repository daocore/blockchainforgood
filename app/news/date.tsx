import dayjs from "dayjs";

export function Today() {
  const today = dayjs();
  const dayOfWeek = today.format("dddd");
  const date = today.format("D MMMM");
  return (
    <div className="bg-black">
      <div className="w-full md:w-content mx-auto text-turqoise text-xs md:text-sm py-1">
        <p className="text-center md:text-left">{`${dayOfWeek}, ${date}`}</p>
      </div>
    </div>
  );
}
