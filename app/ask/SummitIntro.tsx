export const OscorTitle = ({ text }: { text: string }) => {
  return <h2 className="font-bold text-oscorActive font-['Inter'] text-[32px]" style={{
    lineHeight: "41.6px",
    letterSpacing: "-1%"
  }}>{text}</h2>
}

export const SummitInto = () => {

  return (
    <div className="w-full md:w-content m-auto">
      <OscorTitle text="Sustainable Innovation Summit: The 17 SDG Challenge" />
      <div className="text-description font-normal font-['Inter'] text-[16px]" style={{ lineHeight: "24px" }}>
        In a world guided by the United Nations' 17 Sustainable Development Goals, we stand on the brink of a new era. Blockchain technology, with its transformative power, offers us the chance to tackle global challenges like never before. This hackathon is not just a competition—it's a journey where innovators from around the world unite to create solutions that could reshape our future. Join us as we explore the untapped potential of blockchain to drive sustainable change.
      </div>
    </div>
  );
};
