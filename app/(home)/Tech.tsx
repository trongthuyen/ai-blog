import { Post } from "@prisma/client";
import Card from "../(shared)/Card";

interface TechProps {
  techPosts: Array<Post>;
}

const Tech = ({ techPosts }: TechProps) => {
  return (
    <section>
      <hr className="border-1"></hr>

      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
          HOT
        </h4>
        <p className="font-bold text-2xl">Lastest News in Technology</p>
      </div>

      {/* Flex */}
      {/* <div className="flex justify-between items-center gap-5">
        <div className="bg-wh-500 h-96 basis-1/2"></div>
        <div className="flex flex-col h-96 gap-3 basis-1/2">
          <div className="bg-wh-500 basis-1/3"></div>
          <div className="bg-wh-500 basis-1/3"></div>
          <div className="bg-wh-500 basis-1/3"></div>
        </div>
      </div> */}

      {/* Grid */}
      <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5">
        <Card
          className="col-span-1 row-span-3"
          imageHeight="h-96"
          post={techPosts[0]}
          isLongForm
        />
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPosts[1]}
          isSmallCard
        />
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPosts[2]}
          isSmallCard
        />
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPosts[3]}
          isSmallCard
        />
      </div>
    </section>
  );
};

export default Tech;
