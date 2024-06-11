import dayjs from "dayjs";

export function Today() {
  const today = dayjs();
  const dayOfWeek = today.format("dddd");
  const date = today.format("D MMMM");
  return (
    <div className="bg-black">
      <div className="w-content mx-auto text-turqoise text-xs py-1">
        <p>{`${dayOfWeek}, ${date}`}</p>
      </div>
    </div>
  );
}
