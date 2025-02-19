import Badge from "./Badge";
import HeroButtons from "./HeroButtons";

const HeroSection = () => {
  return (
    <div className="cardBorder bg-CardBgColor rounded-md py-[22px] px-4 flex flex-col gap-10 md:px-11 md:py-14">
      <div className="w-[40%] flex flex-col items-center gap-4 md:flex-row-reverse md:w-full md:justify-between">
        <Badge content="AVAILABLE FOR JOB" />
        <h1 className="text-TertiarTextColor font-semibold md:text-2xl">
          UI/UX Designer
        </h1>
      </div>
      <div className="flex flex-col gap-2 md:flex-row-reverse md:justify-between md:items-center">
        <div className="w-[35%] cardBorder bg-[rgba(63,_62,_62,_1)] rounded-full p-1 flex items-center justify-center self-start mb-4 md:w-60 md:h-60">
          <img src="/Nisa.svg" alt="Nisa" className="w-full h-full" />
        </div>
        <div>
          <h1 className="font-extrabold text-2xl md:text-4xl mb-4">I'm Zainab Nisa</h1>
          <h3 className="font-medium text-lg mb-5">
            I design digital products with <br />
            great experience.
          </h3>
          <HeroButtons/>
        </div>
        {/* <HeroButton content="" icon=""/>
        <HeroButton content="" icon=""/> */}
      
      </div>
    </div>
  );
};

export default HeroSection;
