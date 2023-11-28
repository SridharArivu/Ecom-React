import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const unlisten = navigate(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      unlisten();
    };
  }, [navigate]);

  return <>{children}</>;
};

export default ScrollToTop;
