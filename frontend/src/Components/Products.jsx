export default function Product(props) {
  const image = {
    background: `linear-gradient(to bottom, rgba(18, 18, 18, 0), rgba(0, 0, 0, 1)), url(${props.image})`,
  };
  return (
    <div
      style={image}
      className={`products rounded-xl relative ` + props.styleContainer}
    >
      <div
        className={
          `absolute bottom-[5%] left-[5%] w-[90%] text-left text-white font-normal ` +
          props.styleText
        }
      >
        <h1 className={"text-[2vw]"}>{props.heading}</h1>
        <h3 className="text-[0.8vw] tracking-[0.15vw] text-gray-300 mb-[2.75vh]">
          {props.description}
        </h3>
        <a
              href="https://tally.so/r/mV8WpE"
              className="w-fit mx-auto  rounded-md font-thin text-center  justify-center border border-white py-[0.4vw] px-[1vw]  hover:scale-110 transition-all ease-in-out  tracking-wide"
            >
              Join ↗
            </a>
      </div>
    </div>
  );
}
