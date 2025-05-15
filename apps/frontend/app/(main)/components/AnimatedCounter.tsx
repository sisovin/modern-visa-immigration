import React, { useEffect, useState } from 'react';

const AnimatedCounter = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(targetNumber);
    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [targetNumber, duration]);

  return (
    <div className="animated-counter">
      {count}
    </div>
  );
};

const Counters = () => {
  return (
    <div className="counters">
      <AnimatedCounter targetNumber="50" duration="2" />
      <AnimatedCounter targetNumber="1000" duration="5" />
      <AnimatedCounter targetNumber="99" duration="3" />
    </div>
  );
};

export default Counters;
