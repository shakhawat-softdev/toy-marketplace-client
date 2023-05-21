

const NewArrival = ({ toy }) => {
   const { id, name, image, price, toyDetails, provider } = toy;
   // console.log(toy);
   return (
      <>
         <div className="card w-80 shadow-sm boredr border-2 border-slate-500 my-2 mx-auto rounded-lg bg-slate-100">
            <figure className="px-5 pt-10">
               <img src={image} className="rounded-sm w-40 h-40" />
            </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title">{name}</h2>
               <p>{toyDetails}</p>

            </div>
         </div>

      </>
   );
};

export default NewArrival; 