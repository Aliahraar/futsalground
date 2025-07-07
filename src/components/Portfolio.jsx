import React from 'react';
import Image from "../assets/portfolioBook.webp"
const Portfolio = () => {
  const works = [
    {
      author: "TIMOTHY J. PRIO",
      title: "Understanding the Bible",
      subtitle: "Middle: 800 • Eye Holdings",
      image: "/images/bible-study-cover.jpg",
      category: "Religious Literature"
    },
    {
      author: "Mighty Trumpet",
      title: "Mystical Music Journey",
      subtitle: "By Joe Roberts Caputo",
      image: "/images/music-cover.jpg",
      category: "Music Literature"
    },
    {
      author: "Rodgers",
      title: "WWII British Women's Uniforms",
      subtitle: "Historical Fashion Study",
      image: "/images/wwii-uniforms.jpg",
      category: "Historical Fashion"
    },
    {
      author: "Anonymous",
      title: "Profiles in Corruption",
      subtitle: "Political Investigation",
      image: "/images/corruption-cover.jpg",
      category: "Political Exposé"
    }
  ];

  return (
    <section className="min-h-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-black text-left sm:text-center uppercase">
        Published Works Showcase
      </h1>

      <div className="w-auto mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
        {works.map((work, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 aspect-[3/4]"
          >
            <img
              src={Image}
              alt={work.category}
              className="w-full  h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;