import React, { useState } from 'react';
import data from '../data/reviewData';
import { AiFillStar } from "react-icons/ai";
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

  const {id, img, name, date, review} = reviews[index];

  const numOfStars = () => {
    for (let i = 0; i < 5; i++) {
      <AiFillStar className='star-icon' />
    }
  }

  return (
    <main key={id}>
      <section>
        <h3 className='title'>Reviews</h3>

        <img className='profile-img' src={img} alt="dog" />
          
        <div className='review-container'>
          <IoChevronBackOutline className='arrow-icon' onClick={() => previousReview()} />
          <h4 className='review-name'>{name}</h4>
          <IoChevronForwardOutline className='arrow-icon' onClick={() => nextReview()} />
        </div>

        <div className='rating'>
          {
            numOfStars()
          }
        </div>
                  
        <p>{date}</p>
            
        <p className='review-content'>{review}</p>
      </section>
    </main>
  );
}

export default ReviewsContent;