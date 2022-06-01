import { Fragment } from 'react';

import useWindowSize from '../../../../hooks/useWindowSize';
import { screenConfig } from '../../../../script/config/config';

import Card from '../../../UI/Card';

const NeedCard = ({
  className = '',
  thumbnailUrl = '',
  link = '#',
  title = '',
}) => {
  const [screenWidth, screenHeight] = useWindowSize();

  const NeedCardDesktop = (
    <Card
      className={`flex flex-row overflow-hidden drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] ${className}`}
    >
      <div className="img-container w-full h-full">
        <img
          src={thumbnailUrl}
          alt={title}
          className="h-full w-full object-cover object-center"
          loading="lazy"
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

  const NeedCardMobile = (
    <Card className={`h-full w-fit flex flex-row overflow-hidden ${className}`}>
      <div className="img-container w-full h-full">
        <img
          src={thumbnailUrl}
          alt={title}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>
      <div className="needs-content w-full pr-2 pl-4 py-8">
        <h1 className="font-semibold text-lg">{title}</h1>

        <a href={link} className="font-bold text-sm hover:underline">
          Lihat
        </a>
      </div>
    </Card>
  );

  if (screenWidth <= screenConfig.sm) {
    return <Fragment>{NeedCardMobile}</Fragment>;
  }

  return <Fragment>{NeedCardDesktop}</Fragment>;
};
export default NeedCard;
