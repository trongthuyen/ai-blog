import { Post } from "@prisma/client";
import Card from "../(shared)/Card";

interface TravelProps {
  travelPosts: Array<Post>;
}

const Travel = ({ travelPosts }: TravelProps) => {
  return (
    <section className="mt-10">
      <hr className="border-1" />

      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-green py-2 px-5 text-wh-900 text-sm font-bold">
          TRAVEL
        </h4>
        <p className="font-bold text-2xl">New Travel Experiences</p>
      </div>

      <div className="sm:flex justify-between gap-8">
        <Card
          imageHeight="h-80"
          className="basis-1/3 mt-5 sm:mt-0"
          post={travelPosts[1]}
        />
        <Card
          imageHeight="h-80"
          className="basis-1/3 mt-5 sm:mt-0"
          post={travelPosts[2]}
        />
        <Card
          imageHeight="h-80"
          className="basis-1/3 mt-5 sm:mt-0"
          post={travelPosts[3]}
        />
      </div>

      <Card
        imageHeight="h-80"
        className="sm:flex justify-between items-center gap-3 mt-7 mb-5"
        post={travelPosts[0]}
      />
    </section>
  );
};

export default Travel;
