import React, { useEffect, useState } from "react";
import Masoom from "./Masoom";
import ClimateChange from "./ClimateChange";


const Projects = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section>
        <Masoom/>
      </section>
      <ClimateChange scrollY={scrollY} />
    </>
  );
};

export default Projects;
