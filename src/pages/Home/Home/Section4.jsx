import img1 from '../../../../public/images/age/0-2year.png'
import img2 from '../../../../public/images/age/3-4years.jpg'
import img3 from '../../../../public/images/age/5-7years.jpg'
import img4 from '../../../../public/images/age/8-10years.jpg'
import img5 from '../../../../public/images/age/10yerspluse.png'

const Section4 = () => {
   return (
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 lg:w-11/12 text-center border-2 border-red-400 rounded-lg p-5">
         <div className="card w-52 bg-blue-700 rounded-md">
            <figure className="px-10 pt-10">
               <img src={img1} alt="Shoes" className="rounded-md" />
            </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title text-white text-3xl">0-2 Years</h2>
            </div>
         </div>
         <div className="card w-52 bg-blue-700 rounded-md">
            <figure className="px-10 pt-10">
               <img src={img2} alt="Shoes" className="rounded-md" />
            </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title text-white text-3xl">3-4 Years</h2>
            </div>
         </div>
         <div className="card w-52 bg-blue-700 rounded-md">
            <figure className="px-10 pt-10">
               <img src={img3} alt="Shoes" className="rounded-md" />
            </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title text-white text-3xl">5-7 Years</h2>
            </div>
         </div>
         <div className="card w-52 bg-blue-700 rounded-md">
            <figure className="px-10 pt-10">
               <img src={img4} alt="Shoes" className="rounded-md h-48" />
            </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title text-white text-3xl">8-10 Years</h2>
            </div>
         </div>
         <div className="card w-52 bg-blue-700 rounded-md">
            <figure className="px-10 pt-10">
               <img src={img5} alt="Shoes" className="rounded-md h-48" />
            </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title text-white text-3xl">10+ Years</h2>
            </div>
         </div>
         <div className="card w-52 bg-blue-700 rounded-md">
            <figure className="px-10 pt-10">
               <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/More_and_More.png" alt="Shoes" className="rounded-md h-48" />
            </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title text-white text-3xl">More</h2>
            </div>
         </div>
      </div>
   );
};

export default Section4;