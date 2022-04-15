const Card = ({ children, className }) => {
  return <div className={`rounded-10px ${className}`}>{children}</div>;
};

export default Card;
