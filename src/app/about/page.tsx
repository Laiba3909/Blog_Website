'use client'
import PropBar from '../component/bar'
import { client } from '@/sanity/lib/client'
import Heading from '../component/heading'
import Subscribe from '../component/subscribe'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function About() {
  const [paragraph, setParagraph] = useState('No content available')
  const [isExpanded, setIsExpanded] = useState(false)

 
  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch('*[_type == "about"]{paragraph}')
      if (data.length > 0) {
        setParagraph(data[0].paragraph)
      }
    }
    
    fetchData()
  }, []) 

  const handleReadMoreToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div>
      <div>
        <PropBar style="text-white" image="/main3.jpg" name="About" link="/about" />
      </div>

      <Heading
        style="-mt-24"
        heading="What We Are Providing in Our Blog"
        para="Insights, resources, and expert content on Web Development, AI advancements, and E-Commerce strategies."
      />

      <div className="text-white flex justify-center items-center">
        <div className="glossy w-full max-w-[900px] rounded mt-12 text-2xl text-[#7dd163] px-6 py-8">
          <p className="text-center">{paragraph}</p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-12">
        <div className="mr-20 sm:mr-28">
          <Image src={'/download (6).png'} alt="About Image" width={600} height={300} />
        </div>
      </div>


      <div className="bg-[#1a1a1a] text-white py-12 mt-16">
        <div className="text-center max-w-[900px] mx-auto">
          <h3 className="text-3xl font-bold mb-6">About The Author</h3>
          <p className="text-xl mb-6">
            Hi, I&apos;m Laiba - a passionate tech enthusiast, a medical student, and a content creator. My journey in Web Development, AI, and E-commerce started with a simple curiosity, and now, I&apos;m here to share my learnings, challenges, and insights with you. I believe that technology has the power to transform businesses and lives, and through this blog, I aim to provide you with the tools and knowledge to excel in these rapidly evolving fields.
          </p>
         
          {isExpanded && (
            <div className="text-xl mb-6">
                
              <p>
                <span className='text-[#7dd163]'> I love to break down complex topics into easy-to-understand content that can help both beginners and seasoned professionals. Whether it&apos;s about building a strong tech foundation or staying updated with the latest trends in AI and E-commerce, my goal is to make learning accessible and fun for everyone.</span>
                <br />
            
                Thank you for visiting, and I hope my content inspires you to explore, learn, and grow in the world of technology! I believe that every step, from understanding the basics to mastering advanced topics, can open new opportunities for you.
              </p>
              <p>
                I&apos;m always excited to share my knowledge and hear from you! If you have questions or thoughts, feel free to get in touch. Together, we can build a strong community that thrives on innovation and learning.
              </p>
            </div>
          )}
          <button
            onClick={handleReadMoreToggle}
            className="text-[#7dd163] font-semibold hover:underline mt-6"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>

      <br />
      <br />
      <Subscribe subscribe='Subscribe' unsubscribe='Unsubscribe'/>
    </div>
  )
}
