
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card/Card';
import { useEffect, useState } from 'react';

const CoffeeCards = () => {
  const { category } = useParams();
  const data = useLoaderData();
  const [coffes, setCoffes] = useState([]);
  useEffect(() => {
    const filteredByCategory = [...data].filter(coffe => coffe.category === category);
    setCoffes(filteredByCategory)
  }, [data, category])


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6'>
      {coffes.map(coffee =>
        <Card key={coffee.id} coffee={coffee} > </Card>
      )}
    </div>
  );
};

export default CoffeeCards;