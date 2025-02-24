const Gradient2 = ({content}:{content:string}) => {
  return (
    <div className="bg-gradient-to-bl from-[rgba(230,_62,_33,_1)] to-[rgba(230,_62,_33,_0)] rounded-lg relative">
      <div className="absolute z-[10] w-[30%] h-[4rem] left-[70%] rounded-tr-lg lg:w-[30%] border-[2px] border-solid border-[#e63e21] border-b-0 border-l-0"></div>
      <div className="flex items-center justify-center text-lg lg:text-2xl w-ful p-8 rounded-lg text-TertiarTextColor cardBorder bg-CardBgColor bg-[linear-gradient(200deg,_rgba(230,62,33,1)_-20%,_rgba(51,19,14,0)_40%)]">
      <h1>{content}</h1>
    </div>
    </div>
  )
}

export default Gradient2