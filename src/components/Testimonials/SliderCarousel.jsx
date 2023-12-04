
import Slider from "react-slick";

import star from '../../assets/star.svg'
import profile_1 from '../../assets/profile_1.png'
import profile_2 from '../../assets/profile_2.png'
import profile_3 from '../../assets/profile_3.png'

import './SliderCarousel.css';

const SliderCarousel = () => {


    const reviews = [
        {id:0,stars:[0,1,2,3,4],name:'amir uddin',title:'pater',image:profile_1,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
        {id:1,stars:[0,1,2,3,4],name:'amir uddin',title:'pater',image:profile_1,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
        {id:2,stars:[0,1,2,3,4],name:'amir uddin',title:'pater',image:profile_1,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
        {id:3,stars:[0,1,2,3,4],name:'salim ahmed',title:'jakob',image:profile_2,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
        {id:4,stars:[0,1,2,3,4],name:'salim ahmed',title:'jakob',image:profile_2,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
        {id:5,stars:[0,1,2,3,4],name:'salim ahmed',title:'jakob',image:profile_2,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
        {id:6,stars:[0,1,2,3,4],name:'guy hawkins',title:'soren ja',image:profile_3,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
        {id:7,stars:[0,1,2,3,4],name:'guy hawkins',title:'soren ja',image:profile_3,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
        {id:8,stars:[0,1,2,3,4],name:'guy hawkins',title:'soren ja',image:profile_3,review:'We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company'},
    
    ]
    

    const settings = {
        dots: true,
        //   infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
    }

    const numbers = [1,2,3,4,5,6,7,8]


    return (
        <Slider {...settings} className="slider-container">
          {numbers.map((number,index)=> (
            <div key={index} className="slider-item" >
                {number}
            </div>
          ))}
          <div 
        //   key={review.id} 
          className="review-container">
                <div className="stars-container">
                    {reviews[0].stars.map((x, index) => (
                        <div key={index} className="star-place-review">
                            <img src={star} alt="star" className="star-review" />
                        </div>
                    ))}
                </div>
                <div className="review-content">
                    {reviews[0].review}
                </div>
                <div className="review-profile-container">
                    <div className="review-profile">
                        <img src={reviews[0].image} className="review-profile-img" />
                    </div>
                    <div className="review-name-container">
                        <p className="reviewer-name">{reviews[0].name}</p>
                        <p className="reviewer-title">{reviews[0].title}</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
  }

export default SliderCarousel