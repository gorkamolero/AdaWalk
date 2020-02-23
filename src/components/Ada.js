import React from 'react';
import SpriteAnimator from "react-sprite-animator";
import AdaWalk from "../assets/adaWalk.png";

const Ada = ({pos, totalMoves}) => {
  const whereTo = (100 / totalMoves)*pos  + '%'
  return (
    <div
      className="distance"
      style={{
        transform: `translateX(${whereTo})`,
        transition: "1s all"
      }}
    >
      <div className="ada" style={{ width: 64, height: 64, transform: 'translateX(-50%)' }}>
        <SpriteAnimator
          sprite={AdaWalk}
          width={64}
          height={64}
          fps={12}
          frameCount={9}
        />
      </div>
    </div>
  );
}

export default Ada