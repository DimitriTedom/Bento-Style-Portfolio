import Gradient1 from './Gradient1'
import Gradient2 from './Gradient2'
import Products from './Products'
import RecentWork from './RecentWork'
const Section = () => {
  return (
    <div className="grid lg:temp gap-3">
      <div className='cardContainer'>
        <div className='flex items-center gap-2 '>
        <div className="w-4 h-4 bg-TertiarTextColor rounded-full buble"></div>
        <h1 className='text-TertiarTextColor font-bold md:text-2xl'>Recent Work</h1>
        </div>

        <div>
          <RecentWork/>
        </div>
      </div>
       
      <div className='w-full h-full bg-red-700 flex-center'>

      <div className='flex flex-col gap-2 flex-1'>
        <Gradient2 content="Product design"/>
        <div className='grid grid-cols-2 gap-3 lg:gap-5'>
          <Gradient1  content="User Experience" />
          <Gradient1  content="NoCode develop"/>
        </div> 
      </div>
      </div>

      <div className='flex flex-col gap-6 cardBorder bg-CardBgColor pt-[20px] px-4 rounded-lg lg:px-11 lg:pt-14 justify-center'>
        <Products title="iOS Mobile app" subTitle="Product develop" link="#"/>
        <img src="/iPhone Space gray.svg" alt="phone" />
      </div>
      <div className='flex flex-col gap-6 cardBorder bg-CardBgColor pt-[20px] px-4 rounded-lg lg:px-11 lg:pt-14 relative h-[23rem] lg:h-[40%] w-full'>
      <Products title='AI Music product' subTitle='UX Case study' link='#'/>
        <div className=''>
        <img src="/Ai musicc_bg.svg" alt="bg" className='w-[60%] absolute inset-x-[30%] lg:w-[30%] lg:inset-x-[41%] lg:inset-y-[35%]' />
        <img src="/Ai_music.svg" alt='music' className='w-[65%] absolute inset-x-[10%] lg:w-[30%] lg:inset-x-1/3 lg:inset-y-[35%]'/>
        </div>
      </div>
    </div>
  )
}

export default Section