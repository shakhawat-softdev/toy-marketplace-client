import banner from '../../../public/images/herobanner/herobanner.jpg'
// import banner from '../../../public/images/herobanner/herobanner1.jpg'

const HeroBanner = () => {
   return (
      <div className="hero min-h-screen" style={{ backgroundImage: `url('../../../public/images/herobanner/herobanner1.jpg')` }}>
         <div className="hero-overlay bg-opacity-40"></div>
         <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
               <h1 className="mb-5 text-5xl font-bold">Toykingdom!!</h1>
               <p className="mb-5"> Welcome to Toy Kingdom: Where Imagination Comes to Life!</p>
               <p className="mb-5">Explore our enchanting world of toys, where dreams and playtime collide in a magical symphony of fun and adventure. </p>
               {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
         </div>
      </div>
   );
};

export default HeroBanner;