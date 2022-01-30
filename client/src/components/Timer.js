import { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      } else {
          setTimer(0);
      }
    },1000);
    return () => clearTimeout(interval)
  });

  return timer;
}
