import Card from '../UI/Card';

const AmountControl = ({
  className = '',
  amount = 1,
  onAddAmount = () => {},
  onSubtractAmount = () => {},
}) => {
  return (
    <Card
      className={`amount-container w-fit border border-solid border-borderSecondary flex flex-row gap-x-4 ${className}`}
    >
      <button onClick={onSubtractAmount}>-</button>
      <div>{amount}</div>
      <button onClick={onAddAmount}>+</button>
    </Card>
  );
};

export default AmountControl;
