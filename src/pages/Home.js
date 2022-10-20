import React from 'react';
import Navbar from '../components/Navbar';
import image from '../images/pan.jpg';

const Home = () => {
  return (
    <>
      <body className="bg" style={{ backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", 
        backgroundSize:"cover", height:"100vh", width:"auto" }}>
        <Navbar />
      </body>
    </>
  );
}

export default Home;