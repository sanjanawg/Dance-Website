import React, { useEffect } from "react";
import "./Home.css"; // Custom CSS file for additional styling

const Home = () => {
  useEffect(() => {
    const words = document.querySelectorAll(".word");
    words.forEach((word) => {
      const letters = word.textContent.split("");
      word.textContent = "";
      letters.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.1}s`;
        word.append(span);
      });
    });

    const butterfly = document.querySelector(".butterfly");
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      butterfly.style.transform = `translateY(${scrollTop * 0.5}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img
            className="card-img img-fluid"
            src="./assets/maxresdefault.jpg"
            alt="Card"
          />
          <div className="card-img-overlay d-flex align-items-center justify-content-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter word">
                Dance Your Heart Out with NYD
              </h5>
              <p className="card-text fs-5 word">
              
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src="../assets/butterfly.png" alt="Butterfly" className="butterfly" />
    </>
  );
};

export default Home;
