import React, { useState } from 'react';
import data from '../reviewData';
import { AiFillStar } from "react-icons/ai";
import image from "../images/dog1.jpg";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const ReviewsContent = () => {

  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(1);

  const numCheck = (num) => {
    if(num > reviews.length - 1) {
      return 0;
    }
    if(num < 0) {
      return reviews.length - 1;
    }
    return num;
  }

  const nextReview = () => {
    setIndex(numCheck(index + 1));
  }

  const previousReview = () => {
    setIndex(numCheck(index - 1));
  }

  const {id, img, name, stars, date, review} = reviews[index];

  return (
    <main key={id}>
      <h3 className='title'>Reviews</h3>

      <img className='profile-img' src={image} alt="dog" />
        
      <div className='review-container'>
        <IoChevronBackOutline className='arrow-icon' onClick={() => previousReview()} />
        <h4 className='review-name'>{name}</h4>
        <IoChevronForwardOutline className='arrow-icon' onClick={() => nextReview()} />
      </div>
                
      <div className='rating'>
        <AiFillStar className='star-icon' />
        <AiFillStar className='star-icon' />
        <AiFillStar className='star-icon' />
        <AiFillStar className='star-icon' />
        <AiFillStar className='star-icon' />
      </div>
                
      <p>{date}</p>
          
      <p className='review-content'>{review}</p>
    </main>
  );
}

export default ReviewsContent;