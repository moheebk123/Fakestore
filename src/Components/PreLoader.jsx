import Loader from "../../public/loader.gif";
const PreLoader = () => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-white">
      <img src={Loader} />
    </div>
  );
};

export default PreLoader;
