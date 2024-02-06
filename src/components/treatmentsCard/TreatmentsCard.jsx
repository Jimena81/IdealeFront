/* eslint-disable react/prop-types */



function TreatmentsCard({ image, name, price }) {
  return (
    <div>
      <div className="group flex flex-col gap-1 rounded-lg p-5 text-gray" tabIndex="1">
        <div style={{ width: "320px" }} className="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
          <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <img src={image} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
          </div>
          <div style={{ backgroundColor: "#943849", width: "70%" }} className="p-3 rounded-xl opacity-60 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100">
            <h1 className="text-lg font-bold text-white ">{name}</h1>
            <h2 className="text-m font-light text-gray-200 ">{price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TreatmentsCard;
