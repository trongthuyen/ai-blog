import { Post } from "@prisma/client";
import TrendingCard from "../(shared)/TrendingCard";

interface TrendingProps {
  trendingPosts: Array<Post>;
}

const Trending = ({ trendingPosts }: TrendingProps) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          TRENDING
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          maiores voluptatum quod sunt delectus tenetur autem perferendis
          blanditiis vel qui.
        </p>
      </div>

      {/* Flex options */}
      {/* <div className="flex justify-between gap-3 my-3">
        <div className="basis-1/2 bg-wh-500 h-96"></div>
        <div className="flex flex-col basis-1/2 gap-3 h-96">
          <div className="basis-1/2 bg-wh-500"></div>
          <div className="flex basis-1/2 gap-3">
            <div className="basis-1/2 bg-wh-500"></div>
            <div className="basis-1/2 bg-wh-500"></div>
          </div>
        </div>
      </div> */}

      {/* Grid options */}
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px]">
        <TrendingCard
          className="col-span-2 row-span-2 bg-wh-500"
          post={trendingPosts[0]}
        />
        <TrendingCard
          className="col-span-2 row-span-1 bg-wh-500"
          post={trendingPosts[1]}
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
          post={trendingPosts[2]}
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
          post={trendingPosts[3]}
        />
      </div>

      <p className="text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam nulla
        iure laudantium quidem facere voluptatem, veritatis esse ad non,
        voluptates dolore dolorem voluptatum necessitatibus aliquid dolor magni
        recusandae eos sapiente?
      </p>
    </section>
  );
};

export default Trending;
