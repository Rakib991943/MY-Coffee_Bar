
const Card = ({ coffee }) => {
  console.log(coffee);
  const { name, category, image, origin, type, id, rating, popularity } = coffee || {};
  return (
    <div>
      <div className="w-[400px] h-[280px] ">
        <img className="w-full h-full rounded-xl" src={image} alt="" />
      </div>
      <h1 className="text-xl font-bold"> Name : {name}</h1>
      <h3 >Category: {category}</h3>
      <h4>Type : {type}</h4>
      <p>Prigin : {origin}</p>
      <p>Rating : {rating}</p>
      <p>Popular : {popularity}</p>

    </div>
  );
};

export default Card;