import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";

const CountdownWrapper = tw.div`
  flex flex-col justify-center items-center
  bg- p-4 md:p-6 rounded-lg shadow-lg
`;

const CountdownTitle = tw.h1`
  text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6
`;

const CountdownContainer = tw.div`
flex justify-center items-center flex-wrap flex-row lg:w-[70%] sm:w-[90%]
`;

const CountdownUnit = tw.div`
  flex flex-col items-center
  text-center text-gray-800 px-3 py-6 md:px-6 md:py-8 m-2
  bg-gray-100 rounded-md shadow-md basis-1/3 lg:basis-1/5
`;

const CountdownValue = tw.div`
  font-bold text-xl md:text-2xl mb-1 md:mb-2
  text-gray-900
`;

const CountdownLabel = tw.div`
  text-sm md:text-base text-gray-500
  uppercase tracking-wide
`;


const SymposiumCountdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const symposiumDate = new Date("2023-04-25T09:30:00Z");
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = symposiumDate - now;

      if (difference <= 0) {
        clearInterval(intervalId);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <CountdownWrapper>
      <CountdownTitle>Symposium Countdown</CountdownTitle>
      <CountdownContainer>
        <CountdownUnit>
          <CountdownValue>{days}</CountdownValue>
          <CountdownLabel>Days</CountdownLabel>
        </CountdownUnit>
        <CountdownUnit>
          <CountdownValue>{hours}</CountdownValue>
          <CountdownLabel>Hours</CountdownLabel>
        </CountdownUnit>
        <CountdownUnit>
          <CountdownValue>{minutes}</CountdownValue>
          <CountdownLabel>Minutes</CountdownLabel>
        </CountdownUnit>
        <CountdownUnit>
          <CountdownValue>{seconds}</CountdownValue>
          <CountdownLabel>Seconds</CountdownLabel>
        </CountdownUnit>
      </CountdownContainer>
    </CountdownWrapper>
  );
};

export default SymposiumCountdown;
