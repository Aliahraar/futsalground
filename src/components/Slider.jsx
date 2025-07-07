import React, { useEffect, useRef, useState } from "react";

function Slider() {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Fetch brand images from the Lumen API
    fetch("http://localhost:8000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((err) => console.error("Failed to fetch brands:", err));
  }, []);

  useEffect(() => {
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        container.scrollLeft += scrollSpeed;

        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="w-full bg-[#fafafa] py-6 flex justify-center items-center">
      <div
        ref={scrollRef}
        className="w-[80%] flex md:px-10 md:gap-x-30 gap-x-15 scroll-smooth no-scrollbar overflow-hidden"
      >
        {brands.map((brand, i) => (
          <div
            key={brand.id}
            className="flex-shrink-0 group"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onTouchStart={() => setHoveredIndex(i)}
            onTouchEnd={() => setTimeout(() => setHoveredIndex(null), 500)}
          >
            <img
              src={brand.image}
              alt={`Brand ${i + 1}`}
              className={`
                md:w-40 w-20 object-contain transition-all duration-300
                ${hoveredIndex === i ? "grayscale-0" : "grayscale"}
              `}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
