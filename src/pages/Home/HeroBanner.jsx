import banner2 from '../../../public/images/herobanner/herobanner1.jpg'

const HeroBanner = () => {
   return (
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner2})` }}>
         <div className="hero-overlay bg-opacity-30"></div>
         <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
               <h1 className="mb-5 text-5xl font-bold">Toy Kingdom!</h1>
               <p className="mb-5"> Welcome to Toy Kingdom: Where Imagination Comes to Life!</p>
               <p className="mb-5">Explore our enchanting world of toys, where dreams and playtime collide in a magical symphony of fun and adventure. </p>

            </div>
         </div>
      </div>
   );
};

export default HeroBanner;