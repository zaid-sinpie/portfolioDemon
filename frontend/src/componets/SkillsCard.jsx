const SkillsCard = ({ icon, heading, paragraph }) => {
  return (
    <figure className="flex flex-col justify-around items-start gap-4 backdrop-blur-md border border-textYellow w-[15%] max-xl:w-[30%] max-sm:w-fit h-[14rem] px-4 py-4 text-textYellow rounded-2xl">
      {icon}
      <div className="flex flex-col gap-2 justify-around items-start">
        <h1 className="text-xl">{heading}</h1>
        <p className="text-sm text-text">{paragraph}</p>
      </div>
    </figure>
  );
};

export default SkillsCard;
