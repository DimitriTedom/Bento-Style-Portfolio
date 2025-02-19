interface Props{
    content: string,
    icon: string,
    bgColor:string,
    borderColor:string,
}
const buttons = [
    {content:"Hire me",icon:"/Plus.svg",bgColor:"rgba(230,_62,_33,_1)",borderColor:"rgba(228,_100,_63,_1)"},
    {content:"Copy Email",icon:"/Copy.svg",bgColor:"rgba(22,_22,_22,_1)",borderColor:"rgba(38,_38,_38,_1)"},
]
const HeroButtons = () => {
  return (
    <div className="flex gap-2">
      <div className="bg-[rgba(230,_62,_33,_1)] border-[2px_solid_rgba(228,_100,_63,_1)_inset]">Hire me <img src="/Plus.svg" alt="plus(+)" /></div>
    </div>
  )
}

export default HeroButtons