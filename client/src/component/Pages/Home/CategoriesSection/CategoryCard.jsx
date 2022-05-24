import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../../UI/Card';

const CategoryCard = forwardRef(
  ({ className = '', to = '#', title = '' }, ref) => {
    return (
      <Card className={`font-bold text-white ${className}`} ref={ref}>
        <Link to={to} className="block w-full h-full px-8 py-6 ">
          <small className="text-sm">Best Sellers</small>

          <h2 className="sm:text-xl">{title}</h2>
        </Link>
      </Card>
    );
  }
);

export default CategoryCard;
