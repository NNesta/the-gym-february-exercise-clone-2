import React, { useState, useLayoutEffect } from "react";
export default function Custom404() {
  const [random, setRandom] = useState("");
  useLayoutEffect(() => {
    setRandom(Math.floor(Math.random() * 5) + 1);
  }, []);
  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <h1 className="text-7xl font-semibold">This is page {random}</h1>
    </div>
  );
}
