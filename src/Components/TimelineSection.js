import React from "react";
import Logo1 from "../Assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../Assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../Assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../Assets/TimeLineLogo/Logo4.svg";
const TimeLine = [
    {
      Logo: Logo1,
      Heading: "Personalized Learning Plan",
      Description: "Based on the assessment, Learnify generates a dynamic learning plan",
    },
    {
      Logo: Logo2,
      Heading: "Curated Content",
      Description: "A mix of learning resources like articles, videos, interactive games and simulations aligned with the student's interests and learning style",
    },
    {
      Logo: Logo3,
      Heading: "Adaptive Learning Path",
      Description: "Difficulty levels and pacing adjust based on student performance. Students can master concepts before moving on",
    },
    {
      Logo: Logo4,
      Heading: "Goal Tracking",
      Description: "Tracks progress towards academic goals with clear milestones and rewards for achievement."
    },
  ];


const TimelineSection = () => {
  return (
    <div>
      <div className="flex lg:flex-row gap-96 mb-20 items-center">
        <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
          {TimeLine.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3" key={i}>
                <div className="flex gap-6" key={i}>
                  <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={ele.Logo} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
                    <p className="text-gray-400 text-base">{ele.Description}</p>
                  </div>
                </div>
                <div
                  className={`hidden ${
                    TimeLine.length - 1 === i ? "hidden" : "lg:block"
                  }  h-14 border-dotted border-r border-white bg-gray-400/0 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="relative w-fit h-fit shadow-blue-500 shadow-[0px_0px_30px_0px]">
          <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-gray-500 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
            {/* Section 1 */}
            <div className="flex gap-5 items-center lg:border-r border-gray-500 px-7 lg:px-14">
              <h1 className="text-3xl font-bold w-[75px]">10+</h1>
              <h1 className="text-white text-sm w-[75px]">
                Years experiences
              </h1>
            </div>

            {/* Section 2 */}
            <div className="flex gap-5 items-center lg:px-14 px-7">
              <h1 className="text-3xl font-bold w-[75px]">250</h1>
              <h1 className="text-white text-sm w-[75px]">
                types of courses
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;