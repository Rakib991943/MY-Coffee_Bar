
import Banner from './Banner';
import Heading from '../Heading/Heading';
import Categories from './Categories/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Heading title={"Browes Coffee By Category"} subtitle={"Choose your desired coffee category to browse to through specified coffee that fit in your taste "}></Heading>

      <Categories categories={categories}></Categories>
      <Outlet></Outlet>

    </div>

  );
};

export default Home;