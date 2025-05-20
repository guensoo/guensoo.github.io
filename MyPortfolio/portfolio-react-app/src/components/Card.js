import { useRef, useState } from "react";
import "./Card.css";
import { motion, useMotionValue, useSpring } from 'framer-motion';

function Card({ card }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const springX = useSpring(rotateX, {
  stiffness: 60, // ↓ 더 낮추면 더 부드러움
  damping: 15, // ↓ 더 낮추면 더 물렁함
  mass: 0.5, // ↓ 더 낮추면 더 가볍게 튀는 느낌
  restDelta: 0.001,  // 너무 낮으면 끝에서 툭 끊김
  restSpeed: 0.01    // 움직임이 얼마나 느려야 멈추는지
  });

  const springY = useSpring(rotateY, {
  stiffness: 60, // ↓ 더 낮추면 더 부드러움
  damping: 15, // ↓ 더 낮추면 더 물렁함
  mass: 0.5, // ↓ 더 낮추면 더 가볍게 튀는 느낌
  restDelta: 0.001,  // 너무 낮으면 끝에서 툭 끊김
  restSpeed: 0.01    // 움직임이 얼마나 느려야 멈추는지
  });

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxRotate = 30;
    const rX = ((y - centerY) / centerY) * -maxRotate;
    const rY = ((x - centerX) / centerX) * maxRotate;

    rotateX.set(rX);
    rotateY.set(rY);

    setGlarePos({
      x: (x / rect.width)* 100,
      y: (y / rect.height) * 100,
    });
  };

    const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    };

    const styles = {
    frontend: {
      backgroundColor: "#C8E6C9", // 밝은 초록
      color: "#000",              // 어두운 글자
    },
    backend: {
      backgroundColor: "#388E3C", // 진한 초록
      color: "#fff",              // 흰색 글자
    },
  };

  const style = styles[card.type] || {};

  return (
     <motion.div
      className="card"
      ref={cardRef}
      style={{
        ...style,
        rotateX: springX,
        rotateY: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      <div
      className="glare"
      style={{
        left: `${glarePos.x}%`,
        top: `${glarePos.y}%`,
      }}
      />
      <img src={card.img} alt={card.name} />
      <div className="card-content">
        <h2>{card.name}</h2>
        <p>{card.description}</p>
      </div>
    </motion.div>
  );
}

export default Card;