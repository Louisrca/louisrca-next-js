"use client";

import { useEffect, useState } from "react";

export const GetWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return windowWidth;
};
