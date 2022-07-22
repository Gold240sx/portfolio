import { useEffect, useState } from 'react';
import '../../Styles/Footer.css';

export default function Footer() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
      const footer = document.querySelector('.footer-parent')

      footer.classList.remove('hidden');
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className="footer-container">
        <div className="footer-parent hidden">
            <img src={require('../../Assets/Home/shape-bg.png')} alt="background shape" />
        </div>
      
    </div>
  );
}
