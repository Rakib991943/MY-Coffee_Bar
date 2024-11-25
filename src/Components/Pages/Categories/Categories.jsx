
import { NavLink, } from 'react-router-dom';

const Categories = ({ categories }) => {

  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        {
          categories.map(category => <NavLink role="tab" key={category.category} to={`/category/${category.category}`} className={({ isActive }) => `text-2xl mb-9 tab ${isActive ? 'tab-active' : ''}`}>
            {category.category}
          </NavLink>
          )
        }
      </div>
    </div>
  );
};

export default Categories;