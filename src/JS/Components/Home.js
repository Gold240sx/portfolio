import { Profile } from "../Profile";
import ScrollService from "../Utilities/ScrollService";
import Animations from "../Utilities/Animations";
import Footer from "./Footer";
import Header from "./Header";

import '../../Styles/Home.css'

// const footerFadeIn = () => {
//     const footerParent = document.querySelector('.footer-parent');
//     footerParent.classList.add('hidden');
//   }

//   footerFadeIn();

export default function Home() {
  // const [scrollListener, setScrollListener] = useState(false);

  // const footerFadeIn = () => {
  //   const footerParent = document.querySelector('.footer-parent');
  //   footerParent.classList.add('hidden');
  // }

  // footerFadeIn();

  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
