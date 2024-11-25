

const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-12">
      <h1 className="text-2xl md:text-2xl lg:text-4xl font-thin mb-4">{title}</h1>
      <h3 className="text-xl md:tex-base text-gray-700 text-center font-thin">{subtitle}</h3>
    </div>
  );
};

export default Heading;