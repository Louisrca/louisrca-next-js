"use client";

import { useEffect, useState } from "react";

export const getWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  console.log(windowWidth);

  return windowWidth;
};
