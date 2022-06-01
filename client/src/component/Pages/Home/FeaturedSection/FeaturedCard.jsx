import Card from '../../../UI/Card';

const FeaturedCard = ({
  className = '',
  link = '#',
  thumbnailUrl = '',
  brand = '',
  productName = '',
}) => {
  return (
    <Card className={className}>
      <div className="img-container h-36 mb-5">
        <a href={link}>
          <img
            src={thumbnailUrl}
            alt={productName}
            className="h-full object-contain object-left rounded-10px"
            loading="lazy"
          />
        </a>
      </div>

      <div className="brand-card-conent">
        <a href={link}>
          <span>{brand}</span>
          <br />
          <strong>{productName}</strong>
        </a>
      </div>
    </Card>
  );
};

export default FeaturedCard;
