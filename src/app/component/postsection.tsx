import Link from "next/link";
import Image from "next/image";
import Button from "../component/button";

interface Blog {
  _id: string;
  title: string;
  summary: string;
  image?: { asset?: { url: string } } | null;
  slug: { current: string };
}

interface BlogSectionProps {
  posts: Blog[];
  style?: string;
}

export default function BlogSection({ posts, style }: BlogSectionProps) {
  return (
    <div className={style}>
      <div className="hidden lg:grid grid-cols-3 gap-5 mx-auto">
        {posts.length === 0 ? (
          <p className="text-white text-center">No posts found</p>
        ) : (
          posts.map((post: Blog) => (
            <div key={post._id} className="w-80">
              <div className="bg-[#323232] glossy rounded-lg h-72 flex justify-center items-center">
                {post.image?.asset?.url ? (
                  <Link href={`/blogspost/${post._id}`}>
                    <Image
                      className="w-64 h-44 mx-auto rounded"
                      src={post.image.asset.url}
                      alt="Poster"
                      width={200}
                      height={200}
                    />
                  </Link>
                ) : (
                  <div className="w-64 h-44 bg-gray-300 rounded mx-auto flex justify-center items-center">
                    <span className="text-gray-600">No image</span>
                  </div>
                )}
              </div>
              <h2 className="mt-3 text-center font-mono text-xl text-white">{post.title}</h2>
              <p className="w-[270px] ml-5 text-white">{post.summary}</p>
              <Link href={`/blogspost/${post._id}`}>
                <Button
                  name="Read More"
                  style="text-white text-xl glossy2 mt-5 bg-[#7dd163] ml-7 rounded text-gray-700 w-44 h-10 font-bold font-mono"
                />
              </Link>
            </div>
          ))
        )}
      </div>

     
      <div className="lg:hidden mt-12 px-4">
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-4">
            {posts.length === 0 ? (
              <p className="text-white text-center">No posts found</p>
            ) : (
              posts.map((post, index) => (
                <div key={index} className="w-full sm:w-60">
                  <div className="bg-[#323232] glossy rounded-lg p-4">
                    {post.image?.asset?.url ? (
                      <Link href={`/blogspost/${post._id}`}>
                        <Image
                          className="w-full h-40 object-cover rounded"
                          src={post.image.asset.url}
                          alt="Poster"
                          width={300}
                          height={160}
                        />
                      </Link>
                    ) : (
                      <div className="w-full h-40 bg-gray-300 rounded flex justify-center items-center">
                        <span className="text-gray-600">No image</span>
                      </div>
                    )}
                    <h2 className="mt-3 text-center font-mono text-xl text-white">
                      {post.title}
                    </h2>
                    <p className="text-white text-sm mt-2">{post.summary}</p>
                    <Link href={`/blogspost/${post._id}`}>
                      <Button
                        name="Read More"
                        style="text-white text-sm mt-4 bg-[#7dd163] rounded w-full h-10 font-bold"
                      />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

