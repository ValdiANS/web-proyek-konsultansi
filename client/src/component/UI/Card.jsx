import { forwardRef } from 'react';

const Card = forwardRef(({ children, className }, ref) => {
  return (
    <div className={`rounded-10px ${className}`} ref={ref}>
      {children}
    </div>
  );
});

export default Card;
