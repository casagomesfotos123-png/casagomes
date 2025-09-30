import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function ExperienceCounter(props) {
  const [counter, setCounter] = useState(0);
  const finalValue = props.numero;
  const { ref, inView } = useInView({  triggerOnce: true,
  rootMargin: "0px 0px -20% 0px", }); // detecta se o componente entrou na tela

  useEffect(() => {
    if (inView && counter < finalValue) {
      const timer = setTimeout(() => {
        setCounter((prev) => prev + 1);
      }, 5);
      return () => clearTimeout(timer);
    }
  }, [inView, counter]);

  return (
    <div ref={ref} className="text-4xl font-medium text-[#584747]">
      {counter}+
    </div>
  );
}

export default ExperienceCounter;