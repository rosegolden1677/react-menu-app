import React from 'react';
import { AiFillStar } from "react-icons/ai";
import image from "../images/dog1.jpg";

const ReviewsContent = () => {
  return (
    <main>
      <h3 class="title">Reviews</h3>

      <img className='profile-img' src={image} alt="dog" />
      <h4 className='review-name'>Mr. Dog</h4>

      <div className='rating'>
        <AiFillStar className='star-icon' />
        <AiFillStar className='star-icon' />
        <AiFillStar className='star-icon' />
        <AiFillStar className='star-icon' />
        <AiFillStar className='star-icon' />
      </div>
      
      <p>10/04/2022</p>

      <p className='review-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </main>
  );
}

export default ReviewsContent;