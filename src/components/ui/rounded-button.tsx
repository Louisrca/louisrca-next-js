"use client";
import React, { useEffect } from "react";

export const RoundedButton = () => {
  useEffect(() => {
    return () => {
      let text = "text à changéfz zpfaoz -";
      let container = document.getElementById("curvedTextContainer");
      if (container) {
        for (let i = 0; i < text.length; i++) {
          let span = document.createElement("span");
          span.innerHTML = text[i];
          container.appendChild(span);
          span.style.transform = `rotate(${15 * i}deg)`;
        }
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center" id="curvedTextContainer">
      <p className="w-96 h-96"></p>
    </div>
  );
};
