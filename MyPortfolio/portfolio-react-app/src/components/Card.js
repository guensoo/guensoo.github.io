import { useRef, useState } from "react";
import "./Card.css";
import { motion, useMotionValue, useSpring, useMotionTemplate  } from 'framer-motion';

function Card({ card }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0,});

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

  const springScale = useSpring(scale, { stiffness: 150, damping: 20 });

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 2 - 1;
    const percentY = (y / rect.height) * 2 - 1;

    const maxRotate = 15;
    const rX = percentY * maxRotate;
    const rY = -percentX * maxRotate;
    console.log("percentX", percentX, "rY", rY, "percentY", percentY, "rX", rX);

 

    rotateX.set(rX);
    rotateY.set(rY);
    scale.set(1.02);

    setGlarePos({
      x: (x / rect.width)* 100,
      y: (y / rect.height) * 100,
      opacity: 1
    });
  };

    const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    setGlarePos((prev) => ({
      ...prev,
      opacity: 0,
    }));
    };

    // blanchedalmond
    const styles = {
    frontend: {
      backgroundColor: "#388E3C", // 밝은 초록
      color: "#000",              // 어두운 글자
    },
    backend: {
      backgroundColor: "#2F4F4F", // 진한 초록
      color: "#fff",              // 흰색 글자
    },
    DB: {
      backgroundColor: "#A9A9A9", // 진한 초록
      color: "#fff",              // 흰색 글자
    },
  };

  const style = styles[card.type] || {};

  const motionTransform = useMotionTemplate`
    perspective(1000px)
    rotateX(${springX}deg)
    rotateY(${springY}deg)
    scale(${springScale})
  `;

  return (
    <motion.div
      className="card"
      ref={cardRef}
      style={{
        ...style,
        transform: motionTransform,
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      <div
      className="glare"
      style={{
        left: `${glarePos.x}%`,
        top: `${glarePos.y}%`,
        opacity: glarePos.opacity,
      }}
      />
      <div className="title" style={style}>
        <h2 className="card-title" style={{ color: style.color }}>{card.name}</h2>
      </div>

      <div className="image">
        <img className="card-img" src={card.img} alt={card.name} />
      </div>

      <div className="description" style={style}>
        <p className="card-description">{card.description}</p>
      </div>
    </motion.div>
  );
}

export default Card;