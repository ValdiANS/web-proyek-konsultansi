import { forwardRef } from 'react';

import Card from '../../../UI/Card';

const CategoryCard = forwardRef(
  ({ className = '', link = '#', title = '' }, ref) => {
    return (
      <Card className={`font-bold text-white ${className}`} ref={ref}>
        <a href={link} className="block w-full h-full px-8 py-6 ">
          <small className="text-sm">Best Sellers</small>

          <h2 className="text-xl">{title}</h2>
        </a>
      </Card>
    );
  }
);

export default CategoryCard;
