export default function CalendarPage() {
  return (
    <div className="w-full md:w-4/5 pb-4 ">
      <div className="bg-white p-4 shadow-lg h-full rounded-lg">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_8d05a6b190ee15c522555adc26c9ae79a92d9dbb82a216ea7f59e0aec9b33e02%40group.calendar.google.com&ctz=Asia%2FSingapore"
          style={{
            border: 0,
          }}
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}
