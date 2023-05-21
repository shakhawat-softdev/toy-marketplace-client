import slide1 from '../../../public/images/mainbanner/slide1.jpg'
import slide2 from '../../../public/images/mainbanner/slide2.jpg'
import img2 from '../../../public/images/mainbanner/main2.jpg'
import img3 from '../../../public/images/mainbanner/main3.jpg'
import img4 from '../../../public/images/mainbanner/main4.jpg'
import img5 from '../../../public/images/mainbanner/main5.jpg'



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
            <img src={img3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
               <a href="#slide2" className="btn btn-circle">❮</a>
               <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
         </div>
         <div id="slide4" className="carousel-item relative  w-full h-[700px]">
            <img src={img4} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
               <a href="#slide3" className="btn  btn-circle">❮</a>
               <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
         </div>
      </div>
   );
};

export default Section1;