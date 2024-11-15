const Card = ({ logo, heading, paragraph }) => {
  return (
    <figure className="flex justify-between gap-5 items-center w-full text-text">
      <div className="flex justify-center items-center">{logo}</div>
      <div className="flex flex-col gap-2 justify-center items-start">
        <h1 className="text-lg text-textYellow uppercase">{heading}</h1>
        <p className="font-thin">{paragraph}</p>
      </div>
    </figure>
  );
};

export default Card;
