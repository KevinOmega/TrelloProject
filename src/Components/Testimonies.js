import React, { useEffect, useRef, useState } from "react";
import { testimonies } from "../variables";
import TestiCard from "./TestiCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Testimonies = () => {
  const [isMoving, setIsMoving] = useState(false);
  const cardsRef = useRef("");
  const [initialX, setInitialX] = useState(0);
  const [cardsPosition, setCardsPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleMouseDown = (e) => {
    setIsMoving(true);
    setInitialX(e.clientX);
    setCurrentIndex(0);
    cardsRef.current.style.transition = "linear 0.01s";
  };

  const handleMouseLeaving = () => {
    setIsMoving(false);
    cardsRef.current.style.transition = "linear 0.5s";
    const p25 = cardsRef.current.getBoundingClientRect().width / -4;
    const p50 = cardsRef.current.getBoundingClientRect().width / -2;

    if (cardsPosition > p25 / 2) {
      setCurrentIndex(1);
    }
    if (cardsPosition < p25 / 2 && cardsPosition > p50 - p25 / 2) {
      setCurrentIndex(2);
    }
    if (cardsPosition < p50 - p25 / 2 && cardsPosition > p50 + p25 / 2) {
      setCurrentIndex(3);
    }
    if (cardsPosition < p50 + p25 / 2) {
      setCurrentIndex(4);
    }
  };

  const dragCard = (e) => {
    if (isMoving) {
      console.log(cardsPosition);
      setCardsPosition((current) => {
        return (current = current + (initialX - e.clientX) / -40);
      });
    }
  };

  useEffect(() => {
    const cardsUnit =
      (cardsRef.current.getBoundingClientRect().width / testimonies.length) *
      -1;

    switch (currentIndex) {
      case 1:
        setCardsPosition(0);
        break;
      case 2:
        setCardsPosition(cardsUnit);
        break;
      case 3:
        setCardsPosition(cardsUnit * 2);
        break;
      case 4:
        setCardsPosition(cardsUnit * 3);
        break;
      default:
        console.log("si");
        break;
    }
  }, [currentIndex]);

  const handleArrow = (i) => {
    if (currentIndex === 1 && i < 0) {
      setCurrentIndex(testimonies.length);
    } else if (currentIndex === testimonies.length && i > 0) {
      setCurrentIndex(1);
    } else {
      setCurrentIndex(currentIndex + i);
    }
  };

  return (
    <section id="testimonies">
      <div className="testimonies-center">
        <div className="cards-wrapper">
          <div
            ref={cardsRef}
            className="cards"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onMouseUp={handleMouseLeaving}
            onTouchEnd={handleMouseLeaving}
            onMouseMove={dragCard}
            onTouchMove={dragCard}
            onMouseLeave={handleMouseLeaving}
            style={{ transform: `translateX(${cardsPosition}px)` }}
          >
            {testimonies.map((item) => (
              <TestiCard {...item} key={item.id}></TestiCard>
            ))}
          </div>
        </div>
        <div className="btns">
          {testimonies.map((item) => (
            <div
              className={`btn-index ${currentIndex === item.id && "active"}`}
              key={item.id}
              onClick={() => setCurrentIndex(item.id)}
            ></div>
          ))}
          <div className="arrows">
            <span onClick={() => handleArrow(-1)}>
              <AiOutlineArrowLeft />
            </span>
            <span onClick={() => handleArrow(1)}>
              <AiOutlineArrowRight />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
