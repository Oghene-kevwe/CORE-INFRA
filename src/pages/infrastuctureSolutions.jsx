import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton } from "../components/button";
import { BlackWhiteImgComp } from "../components/blackWhiteImg";
import { DummyImg } from "./bespokePayment";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";

export const InfrastuctureSolutions = () => {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const blackWhiteImgRef = useRef();

  const { isVisible: isVisibleSection1 } = useScrollVisibility(
    section1Ref,
    true
  );

  const { isVisible: isVisibleSection2 } = useScrollVisibility(section2Ref);

  const { isVisible: isVisibleSection3 } = useScrollVisibility(section3Ref);

  const { isVisible: isVisibleBlackWhiteImg } =
    useScrollVisibility(blackWhiteImgRef);

  return (
    <>
      <AnimatedContent isVisible={isVisibleSection1}>
        <section
          ref={section1Ref}
          className=" text-black  px-3 md:px-16 lg:px-24"
        >
          <h1 className=" text-3xl relative z-20 font-bold mb-8 md:text-5xl lg:text-7xl  w-fit ">
            Robust infrastructure for secure <br />{" "}
            <span className=" relative inline-block">
              financial
              <GreenUnderline />
            </span>{" "}
            operations
          </h1>
          {/* buttons */}
          <div className=" flex flex-wrap gap-4">
            <GlobalCTAButton text={"Explore More"} style={" bg-gray-200   "} />
            <GlobalCTAButton text={"Get in touch"} style={" bg-ctaGreen   "} />
          </div>
        </section>
      </AnimatedContent>
      {/* black and white boxes */}
      <AnimatedContent isVisible={isVisibleBlackWhiteImg}>
        <div ref={blackWhiteImgRef}>
          <BlackWhiteImgComp />
        </div>
      </AnimatedContent>
      {/* section 2 */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section
          ref={section2Ref}
          className=" text-black  px-3 md:px-16 lg:px-24 mb-16"
        >
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Infrastructure <br /> Solutions
          </h1>
          <p>
            Our Infrastructure Solutions set the stage for secure and scalable
            financial <br /> operations. From seamless middleware integration to
            comprehensive security <br /> measures, CoreInfra provides the
            foundation your business needs for reliable <br /> and efficient
            financial processes
          </p>
          <GlobalCTAButton text={"Get started"} style={" bg-ctaGreen  mt-6"} />
        </section>
      </AnimatedContent>
      {/* section 3 */}
      <AnimatedContent isVisible={isVisibleSection3} >

      <section ref={section3Ref} className=" text-black  px-3 md:px-16 lg:px-24">
        <DummyImg />
      </section>
      </AnimatedContent>
    </>
  );
};