import Card from '../../../UI/Card';

const NeedCard = ({
  className = '',
  thumbnailUrl = '',
  link = '#',
  title = '',
}) => {
  return (
    <Card className={`flex flex-row overflow-hidden ${className}`}>
      <div className="img-container w-full h-full">
        <img
          src={thumbnailUrl}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="needs-content w-full pr-2 pl-4 py-8">
        <h1 className="font-semibold text-xl">{title}</h1>

        <a href={link} className="font-bold text-sm hover:underline">
          Lihat
        </a>
      </div>
    </Card>
  );
};
export default NeedCard;
