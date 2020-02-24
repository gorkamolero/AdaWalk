import React, { useState } from 'react';
import Ada from './Ada';
import { useHotkeys } from "react-hotkeys-hook";

const Stage = () => {
  const [pos, setPos] = useState(1)
  useHotkeys("right", () => setPos(prevPos => prevPos + 1));
  useHotkeys("left", () => setPos(prevPos => prevPos - 1));

  return (
    <div className="stage" style={{ overflow: 'hidden' }}>
      <Ada pos={pos} totalMoves={8} />
    </div>
  )
}

export default Stage