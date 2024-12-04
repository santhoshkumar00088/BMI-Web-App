import React from 'react';

const Hero = () => {
  const handleDownload = (imageUrl, imageName) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className='hero'>
      <div className='content'>
        <div className='title'>
          <h1>FITNESS</h1>
          <h1>FOR</h1>
          <h1>EVERYBODY</h1>
        </div>
        <div className='sub-title'>
         <p>Explore Now </p>
          
        </div>  
        <div className='buttons'>
          <button onClick={() => handleDownload('/public/calorie.jpeg', 'journey-image.jpeg')}>
            Calorie List
          </button>
          <button onClick={() => handleDownload('/public/Stretching.png', 'plan-image.png')}>
            Stretching Exercise
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
