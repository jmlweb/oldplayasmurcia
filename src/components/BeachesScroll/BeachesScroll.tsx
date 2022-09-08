import { FC, useCallback, useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

import { BeachesList } from '@/types';

import BeachesScrollItem, { Props as ItemProps } from './BeachesScrollItem';
import useOnScroll from './useOnScroll';

interface Props {
  items: BeachesList;
  title: string;
  priorityItems?: number;
}

const BeachesScroll: FC<Props> = ({ items, title, priorityItems = 8 }) => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  });

  const { onScroll, onMouseUp, isMoving } = useOnScroll();

  const onClick: ItemProps['onClick'] = useCallback(
    (e) => {
      if (isMoving.current) {
        e.preventDefault();
      }
    },
    [isMoving],
  );

  return (
    <section className="w-full p-3">
      <h1 className="mb-2 font-alternate text-xl text-sky-600">{title}</h1>
      <div
        {...events}
        onScroll={onScroll}
        onMouseUp={onMouseUp}
        ref={ref}
        className="relative flex gap-3 overflow-x-auto pb-4"
      >
        {items.map((item, index) => (
          <BeachesScrollItem
            key={item.slug}
            item={item}
            onClick={onClick}
            priority={false}
          />
        ))}
      </div>
    </section>
  );
};

export default BeachesScroll;
