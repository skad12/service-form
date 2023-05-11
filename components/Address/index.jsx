import TitlePage from "../../layouts/TitlePage";

const Address = () => {
  return (
    <div className="-mt-10 mx-5 p-5 md:mt-16 bg-white rounded-md">
      <TitlePage title={"House Address"} desc={""} />
      <div className="mt-16">
        <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
          Home Address
        </label>
        <input
          className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
          type="address"
          placeholder="Address"
        />
      </div>
    </div>
  );
};

export default Address;
