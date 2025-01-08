const Skill = ({ isHilight, data }) => {
  return (
    <div className="text-sm flex gap-4 ">
      {data.map((e, i) => (
        <div
          key={`${e}-tech-${i}`}
          className={`bg-primaryTitle rounded-md text-white ${
            isHilight ? "hover:scale-125" : ""
          } px-2 py-1`}
        >
          {e}
        </div>
      ))}
    </div>
  );
};

export default Skill;
