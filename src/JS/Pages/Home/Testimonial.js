import ScreenHeading from "../../Utilities/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";

// import OwlCarousel from 'react-owl-carousel';
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

import lady from '../../../Assets/Images/Clients/lady.png';
import '../../../Styles/Testimonial.css'

export default function Testimonial(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
      
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    
    // const options = {
    //     loop: true,
    //     margin: 0,
    //     nav: true,
    //     animateIn: "bounceInRight",
    //     animateOut: "bounceOutRight",
    //     dots: true,
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     responsive: {
    //     0: {
    //         items: 1,
    //     },
    //     768: {
    //         items: 1,
    //     },
    //     1000: {
    //         items: 3,
    //     },
    //     },
    // };
        
    return (
        <div>
            <ScreenHeading 
                title={'Testimonial'}
                subHeading={'What my Clients say about Me'}
            />
            <section className="testimonial-section" id={props.id || ""}>
                <div className="container">
                    <div className="row">
                        <div className="owl-carousel" id="testimonial-carousel">
                            
                            <div className="col-lg-12">
                                <div className="testim-item">
                                    <div className="testim-comment">
                                        <p>
                                            <i className="fa fa-quote-left" />
                                            Michael is the most talented and handsome person I've ever worked with! His talents came in handy in the clutch! There's noone I'd trust more than him. What a hunk!
                                            <i className="fa fa-quote-left" />
                                        </p>
                                        <ul className="stars list-unstyled">
                                            <li>
                                                <i className='fa fa-star' />
                                            </li>
                                            <li>
                                                <i className='fa fa-star' />
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt' />
                                            </li>
                                            <li>
                                                <i className='fa fa-star' />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src={lady} alt="no internet connection"></img> 
                                    </div>
                                    <h5>Daisy Duck</h5>
                                    <p>CEO Instant Global</p>
                                    {/* <img src="../../../Assets/Images/bg-1.jpeg" />  */}
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="testim-item">
                                    <div className="testim-comment">
                                        <p>
                                            <i className="fa fa-quote-left" />
                                            Michael is the most talented and handsome person I've ever worked with! His talents came in handy in the clutch! There's noone I'd trust more than him. What a hunk!
                                            <i className="fa fa-quote-left" />
                                        </p>
                                        <ul className="stars list-unstyled">
                                            <li>
                                                <i className='fa fa-star' />
                                            </li>
                                            <li>
                                                <i className='fa fa-star' />
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt' />
                                            </li>
                                            <li>
                                                <i className='fa fa-star' />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src={lady} alt="no internet connection"></img> 
                                    </div>
                                    <h5>Daisy Duck</h5>
                                    <p>CEO Instant Global</p>
                                    {/* <img src="../../../Assets/Images/bg-1.jpeg" />  */}
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="testim-item">
                                    <div className="testim-comment">
                                        <p>
                                            <i className="fa fa-quote-left" />
                                            Michael is the most talented and handsome person I've ever worked with! His talents came in handy in the clutch! There's noone I'd trust more than him. What a hunk!
                                            <i className="fa fa-quote-left" />
                                        </p>
                                        <ul className="stars list-unstyled">
                                            <li>
                                                <i className='fa fa-star' />
                                            </li>
                                            <li>
                                                <i className='fa fa-star' />
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt' />
                                            </li>
                                            <li>
                                                <i className='fa fa-star' />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src={lady} alt="no internet connection"></img> 
                                    </div>
                                    <h5>Daisy Duck</h5>
                                    <p>CEO Instant Global</p>
                                    {/* <img src="../../../Assets/Images/bg-1.jpeg" />  */}
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="testim-item">
                                    <div className="testim-comment">
                                        <p>
                                            <i className="fa fa-quote-left" />
                                            Michael is the most talented and handsome person I've ever worked with! His talents came in handy in the clutch! There's noone I'd trust more than him. What a hunk!
                                            <i className="fa fa-quote-left" />
                                        </p>
                                        <ul className="stars list-unstyled">
                                            <li>
                                                <i className='fa fa-star' />
                                            </li>
                                            <li>
                                                <i className='fa fa-star' />
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt' />
                                            </li>
                                            <li>
                                                <i className='fa fa-star' />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src={lady} alt="no internet connection"></img> 
                                    </div>
                                    <h5>Daisy Duck</h5>
                                    <p>CEO Instant Global</p>
                                    {/* <img src="../../../Assets/Images/bg-1.jpeg" />  */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
