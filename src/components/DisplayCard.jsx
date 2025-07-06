import { Loader, LayoutDashboard, Star } from "lucide-react";
import { dataContext } from "../context";
const DisplayCard = () => {
  const { isLoading, regenerationLoading, businessData, regenerateHeadline } = dataContext();

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill("★")
          .map((star, i) => (
            <span key={"full" + i} className="text-yellow-500">
              {star}
            </span>
          ))}
        {halfStar && <span className="text-yellow-500">⯪</span>}
        {Array(emptyStars)
          .fill("☆")
          .map((star, i) => (
            <span key={"empty" + i} className="text-gray-300">
              {star}
            </span>
          ))}
      </>
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-95 w-full md:w-lg bg-secondaryBg rounded-xl border-border border-2 shadow-xl p-8">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }
  if (!businessData) {
    return (
      <div className="flex flex-col justify-center items-center min-h-95 w-full md:w-lg bg-secondaryBg rounded-xl border-border border-2 shadow-xl p-8">
        <div>
          <LayoutDashboard className="size-13 text-secondary bg-border rounded-2xl animate-bounce p-2" />
        </div>
        <p className="text-xl text-text font-semibold mt-3">
          Enter your business details and submit.
        </p>
      </div>
    );
  }
  return (
    <div className="w-full md:w-lg bg-secondaryBg rounded-xl border-border border-2 shadow-xl p-8">
      <h1 className="text-2xl font-semibold text-textLight mb-3">Dashboard</h1>
      <div className="flex justify-between mb-5">
        <div>
          <h3 className="text-text text-md font-medium">Rating</h3>
          <p className="text-textDark text-4xl font-semibold flex items-center">
            {businessData.rating}
          </p>
          <p className="text-lg font-semibold">{renderStars(businessData.rating)}</p>
        </div>
        <div>
          <h3 className="text-text text-md font-medium">Reviews</h3>
          <p className="text-textDark text-4xl font-semibold">
            {businessData.reviews}
          </p>
        </div>
      </div>
      <div className="mb-5">
        <h3 className="text-text text-md font-medium mb-2 border-b border-border pb">
          Headline
        </h3>
        <p className="border-l-4 border-textDark text-textDark text-2xl font-semibold bg-border rounded-2xl p-4 mt-4">
          {businessData.headline}
        </p>
      </div>
      <div>
        <button
          disabled={businessData === null}
          className="bg-secondary h-10 rounded-lg text-white text-md font-medium cursor-pointer px-6 hover:shadow-lg hover:shadow-indigo-400 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed mt-3"
          onClick={() => regenerateHeadline()}
        >
          {regenerationLoading ? "Loading..." : "Regenerate"}
        </button>
      </div>
    </div>
  );
};

export default DisplayCard;
