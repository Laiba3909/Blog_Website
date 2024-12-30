'use client'
import Bar from '../../component/bar'
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client'; 
import Image from 'next/image';
import { useParams } from 'next/navigation';
import HeadingProp from '../../component/heading'
import Commnts from '../../component/commentspost'
import Subscribe from '../../component/subscribe'
interface Post {
  _id: string;
  title: string;
  summary: string;
  content:string;
  image: { asset: { url: string } } | null;
  slug: { current: string };
}

export default function DetailedPage() {
  const { id } = useParams();  
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {  
      const fetchPost = async () => {
        const postData = await client.fetch(
          `*[_type == "post" && _id == $id][0]{
            _id,
            title,
            summary,
            content,
            image { asset->{url} },
            slug
          }`,
          { id }
        );
        setPost(postData);
      };

      fetchPost();
    }
  }, [id]);  


  if (!post) {
    return <p>Loading...</p>;  
  }

  return (
    <div>
      <div><Bar name={post.title} link={`/post/${post._id}`} image='/main5.webp'/></div>
      <HeadingProp heading={post.title} para='' style='-mt-24' />
       <div className="flex justify-center  items-center mt-12 ">
{post.image?.asset?.url && (
  <Image
    className="rounded-lg shadow-2xl border-4 border-white hover:border-[#7dd163] "
    src={post.image.asset.url}
    alt={post.title || 'Post Image'}
    width={1000}
    height={300}
   
  />
)}
</div>
    
       <div className="text-white flex justify-center items-center">
        <div className="glossy w-full max-w-[900px] rounded mt-12 text-xl text-[#7dd163] px-6 py-8">
          <p className="text-center">{post.content}</p>
        </div>
      </div>
    <br />
    <Commnts />
       <Subscribe subscribe='Subscribe' unsubscribe='Unsubscribe'/>
    </div>
  );
 }

