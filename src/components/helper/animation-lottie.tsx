"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface AnimationLottieProps {
  animationPath: string | any; // animation file path OR animation object
  width?: string | number;
}

const AnimationLottie: React.FC<AnimationLottieProps> = ({
  animationPath,
  width = "95%",
}) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // If animationPath is already an object (like from experience page), use it directly
    if (typeof animationPath === 'object' && animationPath !== null) {
      setAnimationData(animationPath);
      return;
    }

    // If animationPath is a string (file path), fetch it
    if (typeof animationPath === 'string') {
      fetch(animationPath)
        .then((response) => response.json())
        .then((data) => setAnimationData(data))
        .catch((error) => {
          console.error("Error loading Lottie animation:", error);
        });
    }
  }, [animationPath]);

  if (!animationData) {
    return <div style={{ width, height: "200px" }} className="flex items-center justify-center text-gray-400">Loading animation...</div>;
  }

  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    style: {
      width,
    },
  };

  return <Lottie {...options} />;
};

export default AnimationLottie;