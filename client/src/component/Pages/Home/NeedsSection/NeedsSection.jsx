import { XyzTransitionGroup } from '@animxyz/react';

import NeedCard from './NeedCard';

const NeedsSection = ({ className }) => {
  return (
    <section className={`container mx-auto ${className}`}>
      <h1 className="font-light text-4xl mb-7">
        Sort by <strong className="font-bold">Needs</strong>
      </h1>

      <div className="needs-card-container">
        <XyzTransitionGroup
          appearVisible
          xyz="fade up-100% stagger-1 ease-out-back"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-x-20 gap-y-8"
        >
          <div>
            <NeedCard
              thumbnailUrl="https://dummyimage.com/720x720/e5e5e5/FFFFFF.png&text=Placeholder+Needs+1"
              link="#"
              title="Makanan 1"
              className="w-full h-full bg-white"
            />
          </div>

          <div>
            <NeedCard
              thumbnailUrl="https://dummyimage.com/720x720/e5e5e5/FFFFFF.png&text=Placeholder+Needs+2"
              link="#"
              title="Makanan 2"
              className="w-full h-full bg-white"
            />
          </div>

          <div>
            <NeedCard
              thumbnailUrl="https://dummyimage.com/720x720/e5e5e5/FFFFFF.png&text=Placeholder+Needs+3"
              link="#"
              title="Makanan 3"
              className="w-full h-full bg-white"
            />
          </div>

          <div>
            <NeedCard
              thumbnailUrl="https://dummyimage.com/720x720/e5e5e5/FFFFFF.png&text=Placeholder+Needs+4"
              link="#"
              title="Makanan 4"
              className="w-full h-full bg-white"
            />
          </div>
        </XyzTransitionGroup>
      </div>
    </section>
  );
};

export default NeedsSection;
