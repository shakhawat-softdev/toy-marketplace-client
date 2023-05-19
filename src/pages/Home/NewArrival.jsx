

const NewArrival = ({ toy }) => {
   const { id, name, image, price, toyDetails, provider } = toy;
   // console.log(toy);
   return (
      <>
         <div className="card w-80 bg-base-100 shadow-sm boredr border-2 border-slate-500 my-2">
            <figure className="px-10 pt-10">
               <img src={image} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title">{name}</h2>
               <p>If a dog chews shoes whose shoes does he choose?</p>
               {/* <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
               </div> */}
            </div>
         </div>

      </>
   );
};

export default NewArrival; 