"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import PropBar from "../component/bar";
import Heading from "../component/heading";
import BlogSection from '../component/postsection'
import  Subscribe from "../component/subscribe";
interface Blog {
    _id: string;
    title: string;
    summary: string;
    image?: { asset?: { url: string } } | null;
    slug: { current: string };
  }

export default function Blogs() {
    const [posts, setPosts] = useState<Blog[]>([]);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const postsData: Blog[] =
          (await client.fetch(`*[_type == "blogs"]{
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
  
    const trending = posts.slice(0, 3);
    const topContent = posts.slice(3,6);
    const content = posts.slice(6,9)
    return (
      <div>
        <div>
          <PropBar image="/mainai.jpg" name="Blogs" link="/blogs" />
        </div>
  
        <Heading
          style="-mt-16"
          heading="Trending Blog Posts"
          para="Stay updated with the latest trends, expert opinions, and must-read articles in our blog."
        />
  
        <div className="flex justify-center items-center mt-32">
          <BlogSection posts={trending} style="-mt-24"/>
        </div>

       
  
        <Heading
          style="-mt-16"
          heading="Latest Tech Insights"
          para="Discover trending topics, expert advice, and key articles shaping the world of tech today."
        />
  
        <div className="flex justify-center items-center mt-32">
          <BlogSection posts={topContent} style="-mt-24"/>
        </div>

        <Heading
          style="-mt-16"
          heading="Innovations in Web AI"
          para="Stay informed about emerging trends in AI for web development and smarter e-commerce platforms."
        />
  
        <div className="flex justify-center items-center mt-32">
          <BlogSection posts={content} style="-mt-24"/>
        </div>


       <Subscribe subscribe='Subscribe' unsubscribe='Unsubscribe'/>
      </div>
    );
  }
  