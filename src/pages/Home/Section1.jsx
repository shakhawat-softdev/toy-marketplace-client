import slide1 from '../../../public/images/dicover/100.jpg'
import slide2 from '../../../public/images/dicover/90.jpg'
import slide3 from '../../../public/images/dicover/60.jpg'
import slide4 from '../../../public/images/dicover/21.jpg'




const Section1 = () => {
   return (
      <div className="carousel w-full">
         <div id="slide1" className="carousel-item relative  w-full h-[700px]">
            <img src={slide1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
               <a href="#slide4" className="btn btn-circle">❮</a>
               <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
         </div>
         <div id="slide2" className="carousel-item relative  w-full h-[700px]">
            <img src={slide2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
               <a href="#slide1" className="btn btn-circle">❮</a>
               <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
         </div>
         <div id="slide3" className="carousel-item relative  w-full h-[700px]">
            <img src={slide3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
               <a href="#slide2" className="btn btn-circle">❮</a>
               <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
         </div>
         <div id="slide4" className="carousel-item relative  w-full h-[700px]">
            <img src={slide4} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
               <a href="#slide3" className="btn  btn-circle">❮</a>
               <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
         </div>
      </div>
   );
};

export default Section1;