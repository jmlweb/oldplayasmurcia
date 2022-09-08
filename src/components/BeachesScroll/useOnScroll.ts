import { useCallback, useMemo, useRef } from 'react';

let timeout: NodeJS.Timeout;

const useOnScroll = () => {
  const isMoving = useRef(false);

  const onScroll = useCallback(() => {
    clearTimeout(timeout);
    isMoving.current = true;

    timeout = setTimeout(() => {
      isMoving.current = false;
    }, 500);
  }, []);

  const onMouseUp = useCallback(() => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      isMoving.current = false;
    }, 100);
  }, []);

  return useMemo(
    () => ({
      isMoving,
      onScroll,
      onMouseUp,
    }),
    [onScroll, onMouseUp],
  );
};

export default useOnScroll;
