import { useState } from "react";
import { dataContext } from "../context";
import toast from "react-hot-toast";

const InputForm = () => {
  const [businessName, setBusinessName] = useState("");
  const [businessLocation, setBusinessLocation] = useState("");

  const { isLoading, getBusinessData } = dataContext();

  const formSubmission = (e) => {
    e.preventDefault();
    if (!businessName || !businessLocation) {
      toast.error("All fields are required!");
      return;
    }
    const obj = { name: businessName, location: businessLocation };
    getBusinessData(obj);
    setBusinessName("");
    setBusinessLocation("");
  };

  return (
    <div className="w-full md:w-lg bg-secondaryBg rounded-xl border-border border-2 shadow-xl p-8">
      <h1 className="text-2xl font-semibold text-textLight">Business Info</h1>
      <form onSubmit={formSubmission}>
        <div className="mt-3">
          <label
            htmlFor="businessNameInput"
            className="text-text text-sm font-medium"
          >
            Business Name
          </label>
          <input
            id="businessNameInput"
            type="text"
            placeholder="Eg: Cream & co."
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full border-border border-1 h-10 text-sm px-2"
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="businessLocInput"
            className="text-text text-sm font-medium"
          >
            Business Location
          </label>
          <input
            id="businessLocInput"
            type="text"
            placeholder="Eg: Mumbai"
            value={businessLocation}
            onChange={(e) => setBusinessLocation(e.target.value)}
            className="w-full border-border border-1 h-10 text-sm px-2"
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="bg-primary h-10 rounded-lg text-white text-md font-medium cursor-pointer px-6 hover:shadow-lg hover:shadow-indigo-400 hover:scale-105"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
