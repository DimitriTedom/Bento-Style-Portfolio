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
      <div className="bg-[rgba(230,_62,_33,_1)] rounded-xl flex space-x-6 p-4 items-center bo relative"><h4 className="text-lg font-semibold">Hire me </h4><img src="/Plus.svg" alt="plus(+)" className="w-4 h-4"/> <div className="w-[2px] h-full bg-black absolute left-1/2 rounded"></div></div>
    </div>
  )
}

export default HeroButtons