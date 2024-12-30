'use client'
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import "animate.css";
import Button from "../app/component/button";
import main from "../../public/main2.webp";
import Subscribe from '../app/component/subscribe'
const Ai = [
  { title: "Next.js",
    link:'https://nextjs.org/docs'
   },
  { title: "Python",
    link:'https://docs.python.org/3/'
   },
  { title: "Cloud Comput",
    link:'https://www.scribd.com/document/519931351/Cloud-Computing-Documentation-Copy-Converted-Copy'
  },
  { title: "Ecommerce",
    link:'https://www.slideshare.net/slideshow/ecommerce-documentation/71682860'
   },
  { title: "Data Science",
    link:'https://computing4all.com/courses/introductory-data-science/?gad_source=1&gclid=Cj0KCQiAvbm7BhC5ARIsAFjwNHsmMZug3lz_Y8_q9yDJU6IrffoXp2S7vQHzih49Mv6ytteYc3K1Cl4aAoGtEALw_wcB'
  },
];



interface Post {
  _id: string;
  title: string;
  summary: string;
  image: { asset: { url: string } } | null;
  slug: { current: string };
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
 
  useEffect(() => {
    const fetchPosts = async () => {
      const postsData: Post[] =
        (await client.fetch(`*[_type == "post"]{
          _id,
          title,
          summary,
          image {
            asset->{
              url
            }
          },
          slug
        }`)) || [];
      setPosts(postsData);
    };
    fetchPosts();
  }, []);
 
  return (
    <div>
      <div>
        <Image
          className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] object-cover"
          src={main}
          alt="Loadinggg"
          width={1500}
          height={100}
        />
      </div>
      <h1 className="text-[#7dd163] mt-12 text-2xl text-center font-mono font-semibold">
        Our Recent Posts
      </h1>
      <p className="text-white mt-2 text-lg md:text-xl text-center font-mono">
        Web development, e-commerce, and AI combine to create innovative,
        user-focused digital experiences.
      </p>
      
      <div className="flex justify-center items-center mt-32">
  <div className="hidden lg:grid grid-cols-3 gap-5 mx-auto">
    {posts.length === 0 ? (
      <p className="text-white text-center">No posts found</p>
    ) : (
      posts.map((post: Post) => (
        <div key={post._id} className="w-80">
          <div className="bg-[#323232] glossy rounded-lg h-72 flex justify-center items-center">
            {post.image?.asset?.url ? (
              <Link href={`/post/${post._id}`}>
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
          <Link href={`/post/${post._id}`}  >
            <Button
              name="Read More"
              style="text-white text-xl  glossy2  mt-5 bg-[#7dd163] ml-7 rounded text-gray-700 w-44 h-10 font-bold font-mono"
            />
          
          </Link>
        </div>
      ))
    )}
  </div>
</div>

<div className="lg:hidden mt-12 px-4">
  <div className="relative">
    <div className="flex overflow-x-auto space-x-4">
      {posts.length === 0 ? (
        <p className="text-white text-center">No posts found</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="w-60 flex-shrink-0">
            <div className="bg-[#323232] glossy rounded-lg p-4">
              {post.image?.asset?.url ? (
                <Link href={`/post/${post._id}`}>
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
              <Link href={`/post/${post._id}`}>
                <Button
                  name="Read More"
                  style="text-white text-sm mt-4 bg-[#7dd163]   rounded w-full h-10 font-bold"
                />
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
</div>

      <h1 className="text-[#7dd163] mt-28 text-2xl text-center font-mono font-semibold">
        Discover the Latest Innovations in Tech
      </h1>
      <p className="text-white mt-2 text-lg md:text-xl text-center font-mono">
        Explore how human creativity drives AI, e-commerce, and web development
        to shape the future of technology.
      </p>
      <div className="glossy bg-gray-400 w-full h-auto lg:h-80 mt-12 flex flex-col lg:flex-row items-center lg:justify-between p-8 lg:p-0">
        <h1 className="text-3xl lg:text-4xl text-center lg:text-left mt-8 lg:mt-16 lg:ml-20 font-mono w-full lg:w-[520px] font-bold">
          <span className="text-[#7dd163]">Empowering Innovation:</span> The
          Collaboration Between AI and Human Developers
          <Button
            name="Read More"
            style="text-white text-sm mt-4 bg-[#7dd163] hover:text-black hover:w-40 hover:text-lg rounded w-36 h-10 font-bold"
          />
        </h1>
        <div className="mt-8 lg:mt-0">
          <Image
            className="lg:mr-12"
            src={"/im2.png"}
            alt=""
            width={500}
            height={200}
          />
        </div>
      </div>
      <h1 className="text-[#7dd163] mt-28 text-2xl text-center font-mono font-semibold">
        How to Become Successful in the AI World
      </h1>
      <p className="text-white mt-2 text-lg md:text-xl text-center font-mono">
        Master the Fundamentals of Artificial Intelligence (AI) and Machine
        Learning (ML) for Success
      </p>
      <div className="glossy bg-gray-400 w-full h-[600px] md:h-[460px] lg:h-[450px] xl:h-80    mt-12 flex justify-center items-center">
        <div className="flex flex-wrap justify-center lg:space-x-12 space-y-8 lg:space-y-0">
          {Ai.map((data, index) => (
               <Link   key={index} href={data.link} >
            <div
            
              className="relative w-40 h-40 md:w-48 md:h-48 flex justify-center items-center"
            >
           
              <div className="absolute w-full hover:border-black h-full border-[10px] border-[#7dd163] rounded-full"></div>
              <div className="absolute w-full hover:border-[#7dd163] h-full border-[8px] border-black rounded-full"></div>
              <div className="absolute w-full hover:border-black h-full border-[2px] border-[#7dd163] rounded-full"></div>
              <h1 className="text-white hover:text-[#7dd163] font-mono text-lg md:text-2xl text-center z-10">
                {data.title}
              </h1>
            
            </div>
            </Link>
          ))}
       
        </div>
      
      </div>
      <br />

      <h1 className="text-[#7dd163] mt-28 text-2xl text-center font-mono font-semibold">
      Revolutionizing E-commerce with AI Tools for Smarter Web Development
      </h1>
      <p className="text-white mt-2 text-lg md:text-xl text-center font-mono">
      AI tools in e-commerce enhance customer experience, automate tasks, and boost sales efficiency.
      </p>
      <div className="flex mt-20 px-4 lg:px-0 lg:justify-between">
  <div className="hidden xl:ml-52 xl:mt-6 lg:block lg:w-[500px] xl:w-[500px]">
    <Link href={'https://www.simplilearn.com/tutorials/artificial-intelligence-tutorial/top-generative-ai-tools'}>
      <Image
        className="w-full h-[550px] rounded-lg border-4 border-gray-500"
        src={'/tool3.jpg'}
        alt="Tool 3"
        width={700}
        height={550}
      />
    </Link>
  </div>

  <div className="hidden xl:mr-48 lg:block lg:w-[600px] xl:w-[600px]">
    <Link href={'https://sellercloud.com/blog/how-to-use-ai-tools-like-chatgpt-in-e-commerce/'}>
      <Image
        className="w-full h-[300px] rounded-lg border-4 border-gray-500"
        src={'/tool2.webp'}
        alt="Tool 2"
        width={700}
        height={300}
      />
    </Link>
    <Image
      className="mt-2 w-full h-[300px] rounded-lg border-4 border-gray-500"
      src={'/tool1.png'}
      alt="Tool 1"
      width={700}
      height={500}
    />
  </div>

  <div className="lg:hidden flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 space-x-4">
    <div className="flex-none w-[600px]">
      <Link href={'https://www.simplilearn.com/tutorials/artificial-intelligence-tutorial/top-generative-ai-tools'}>
        <Image
          className="w-full h-[300px] rounded-lg border-4 border-gray-500"
          src={'/tool3.jpg'}
          alt="Tool 3"
          width={700}
          height={300}
        />
      </Link>
    </div>

    <div className="flex-none w-[600px]">
      <Link href={'https://sellercloud.com/blog/how-to-use-ai-tools-like-chatgpt-in-e-commerce/'}>
        <Image
          className="w-full h-[300px] rounded-lg border-4 border-gray-500"
          src={'/tool2.webp'}
          alt="Tool 2"
          width={700}
          height={300}
        />
      </Link>
    </div>

    <div className="flex-none w-[600px]">
      <Image
        className="w-full h-[300px] rounded-lg border-4 border-gray-500"
        src={'/tool1.png'}
        alt="Tool 1"
        width={700}
        height={300}
      />
    </div>
  </div>
</div>




      <br />

    

  <Subscribe subscribe='Subscribe' unsubscribe='Unsubscribe'/>

    </div>
  );
}

