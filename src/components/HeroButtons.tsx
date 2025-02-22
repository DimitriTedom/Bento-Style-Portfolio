interface Props {
  content: string;
  icon: string;
  iconAlt: string;
  bgColor: string;
  borderColor: string;
  topBorderColor: string;
  shadowColor: string; 
  hoverShadowColor: string; 
  stickColor: string; 
  leftPercent:string;
  clipboardText?: string; 

}

const buttons: Props[] = [
  {
    content: "Hire me",
    icon: "/Plus.svg",
    iconAlt: "plus(+)",
    bgColor: "rgba(230, 62, 33, 1)",
    borderColor: "#161616",
    topBorderColor: "#e4643f",
    shadowColor: "0px 0px 15px rgba(230, 62, 33, 1)",
    hoverShadowColor: "0px 0px 15px 3px rgba(230, 62, 33, 1)",
    stickColor: "#000000",
    leftPercent: "50",
    clipboardText: "https://www.linkedin.com/in/tedom-tafotsi-dimitri-wilfried-b70502298/",
  },
  {
    content: "Copy Email",
    icon: "/Copy.svg",
    iconAlt: "copy",
    bgColor: "rgba(22, 22, 22, 1)",
    borderColor: "rgba(38, 38, 38, 1)",
    topBorderColor: "#FFFFFF",
    shadowColor: "0px 0px 15px rgba(38, 38, 38, 1)",
    hoverShadowColor: "0px 0px 15px 3px rgba(38, 38, 38, 1)",
    stickColor: "rgba(38, 38, 38, 1)",
    leftPercent : "59",
    clipboardText: "dimitritedom@gmail.com",
  },
];

const HeroButtons = () => {
  const copyToClip = async (text:string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Copied to clipboard: ${text}`);
    } catch (error) {
      console.error("Failed to copy text: ", error);
      alert("Failed to copy text. Please try again.");  
    }
  }
  return (
    <div className="flex gap-3 items-center">
      {buttons.map((button, index) => (
        <div
          key={index}
          className="rounded-xl flex space-x-6 p-2 lg:p-4 items-center relative"
          style={{
            background: button.bgColor,
            border: `2px solid ${button.borderColor}`,
            borderTop: `2px solid ${button.topBorderColor}`,
            boxShadow: button.shadowColor,
            transition: "box-shadow 0.3s ease, border-color 0.3s ease, border-top-color 0.3s ease", 
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = button.hoverShadowColor; 
            e.currentTarget.style.borderColor = button.topBorderColor; 
            e.currentTarget.style.borderTopColor = button.borderColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = button.shadowColor;
            e.currentTarget.style.borderColor = button.borderColor;
            e.currentTarget.style.borderTopColor = button.topBorderColor;
          }}
          onClick={()=>{
            if (button.clipboardText) {
              copyToClip(button.clipboardText);
            }
          }}
        >
          <h4 className="text-lg font-semibold">{button.content}</h4>
          <img src={button.icon} alt={button.iconAlt} className="w-4 h-4 hover:cursor-pointer" />
          <div
            className={`absolute rounded`}
            style={{
              width: "2px",
              height: "100%",
              background: button.stickColor,
              left: `${button.leftPercent}%`
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default HeroButtons;