import { useRef, useState, useEffect } from "react";
import "./Card.css";
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

function Card({ card }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isFlipped, setIsFlipped] = useState(false);

  const springX = useSpring(rotateX, { stiffness: 60, damping: 15, mass: 0.5, restDelta: 0.001, restSpeed: 0.01 });
  const springY = useSpring(rotateY, { stiffness: 60, damping: 15, mass: 0.5, restDelta: 0.001, restSpeed: 0.01 });
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

    rotateX.set(rX);
    rotateY.set(rY);
    scale.set(1.02);

    setGlarePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 1 });
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  const styles = {
    intro: { backgroundColor: "#F6FC7A", color: "#000" },
    frontend: { backgroundColor: "#388E3C", color: "black" },
    backend: { backgroundColor: "#2F4F4F", color: "white" },
    DB: { backgroundColor: "#A9A9A9", color: "#fff" },
    projects: { backgroundColor: "#BA4160", color: "#fff" },
  };

  const style = styles[card.type] || {};

  const motionTransform = useMotionTemplate`
    perspective(1000px)
    rotateX(${springX}deg)
    rotateY(${springY}deg)
    scale(${springScale})
  `;

  return (
    <div
      className={`card-flip-container ${isFlipped ? "flipped" : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="card-flip">

        <motion.div
          className="card-face card-front"
          ref={cardRef}
          style={{
            ...style,
            transform: motionTransform,
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
          onMouseMove={isFlipped ? null : handleMouseMove}
          onMouseLeave={isFlipped ? null : reset}
        >
          <div className="glare" style={{ left: `${glarePos.x}%`, top: `${glarePos.y}%`, opacity: glarePos.opacity }} />
          <div className="title">
            <h2 className="card-title">{card.name}</h2>
          </div>
          <div className="image">
            <img className="card-img" src={card.img} alt={card.name} />
          </div>
          <div className="description">
            <p className="card-description">{card.description}</p>
          </div>
        </motion.div>

        <div className="card-face card-back">
          <h3>{card.name}</h3>
          <div className="modal-description">
            {typeof card.modalDescription === "string" ? (
              <p style={{ whiteSpace: 'pre-line' }}>{card.modalDescription}</p>
            ) : (
              card.modalDescription
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Card;
