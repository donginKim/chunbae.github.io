import { useState, useEffect } from 'react';

const useCountUp = (targetValue, duration = 1800) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);
      
      // easeOutExpo 이징 함수 적용
      const easing = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      setCount(Math.floor(targetValue * easing * 10) / 10);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetValue, duration]);

  return count;
};

export default useCountUp;