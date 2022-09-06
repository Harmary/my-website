import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import proj1 from '../assets/olivia jewels 1.png';
import proj2 from '../assets/OceanOffer.png';
import proj3 from '../assets/Frame 1.png';

export function Projects() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 768 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 768, min: 360 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 360, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        return <button aria-label='Go to next' type='button' className='arrow-left' onClick={() => onClick()}/>;
      };
      const CustomLeftArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        return <button aria-label='Go to previous' type='button' className='arrow-right' onClick={() => onClick()} />;
      };
    return(
    <div id="projects" className='projects'>
        <h2>Проекты</h2>
        <div class="carousel container">
            <Carousel
                infinite={true}
                responsive={responsive}
                sliderClass="carousel-block"
                itemClass='.carousel-item'
                customLeftArrow={<CustomLeftArrow/>}
                customRightArrow={<CustomRightArrow/>}
            >
                <img width={1000} alt='OliviaJewels' src={proj1}></img>
                <img width={1000} alt='Ocean offer' src={proj2}></img>
                <img width={1000} alt='Cards' src={proj3}></img>
            </Carousel>
        </div>
    </div>
 )   
};
