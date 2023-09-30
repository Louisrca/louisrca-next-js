"use client";
import React, { useEffect } from "react";

export const RoundedButton = () => {
  useEffect(() => {
    return () => {
      let text = "Look at my resume - ";
      let container = document.getElementById("curvedTextContainer");
      if (container) {
        for (let i = 0; i < text.length; i++) {
          let span = document.createElement("span");
          span.innerHTML = text[i];
          container.appendChild(span);
          console.log(text[i]);
          span.style.transform = `rotate(${18 * i}deg)`;
        }
      }
    };
  }, []);

  

  return (
    <p
      id="curvedTextContainer"
      className="absolute inset-0 flex justify-center items-center"
    ></p>
  );
};
