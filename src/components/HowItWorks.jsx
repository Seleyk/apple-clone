import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const HowItWorks = () => {
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex-center w-full my-20" id="chip">
          <img
            src="/assets/images/chip.jpeg"
            alt="chip"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col items-center">
            <h2 className="hiw-title">
                A17 Pro chip.
                <br /> A monster win for gaming.
            </h2>
            <p className="hiw-subtitle">
              It's here. The biggest redesign in the history of Apple GPUs.  
            </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
