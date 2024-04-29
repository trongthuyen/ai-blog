import Sidebar from "@/app/(shared)/Sidebar";
import Content from "./Content";
import { prisma } from "@/app/api/client";
import { Post as IPost } from "@prisma/client";
import { FormattedPost } from "@/app/types";
import Loading from "../loading";

export const revalidate = 60;

const getPost = async (id: string) => {
  const post: IPost | null = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  if (!post) {
    console.error(`Post with id ${id} not found`);
    return null;
  }

  const formattedPost = {
    ...post,
    createdAt: post.createdAt?.toISOString(),
    updatedAt: post.updatedAt?.toISOString(),
  };

  return formattedPost;
};

interface PostProps {
  params: {
    id: string;
  };
}

const Post = async ({ params }: PostProps) => {
  const { id } = params;

  const post: FormattedPost | null = await getPost(id);

  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          {!!post ? <Content post={post} /> : <Loading />}
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Post;
