import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const LiveBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 5;
        const delay = Math.random() * 1;
        newStars.push({ x, y, size, delay });
      }
      setStars(newStars);
    };

    createStars();
    window.addEventListener("resize", createStars);

    return () => {
      window.removeEventListener("resize", createStars);
    };
  }, []);

  const starAnimation = useSpring({
    loop: { reverse: true },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <div className="absolute w-full h-full overflow-hidden">
      {stars.map((star, index) => (
        <animated.div
          key={index}
          className="absolute bg-yellow-500 rounded-full"
          style={{
            left: star.x,
            top: star.y,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}ms`,
            ...starAnimation,
          }}
        />
      ))}
    </div>
  );
};

export default LiveBackground;