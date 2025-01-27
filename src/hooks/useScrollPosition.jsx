import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // 스크롤 위치를 업데이트하는 함수
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', updatePosition);

    // 초기 위치 설정
    updatePosition();

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;