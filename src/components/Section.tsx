import RecentWork from './RecentWork'
import './Section.css'
const Section = () => {
  return (
    <div className="Container">
      <div className='flex flex-col gap-6 cardBorder bg-CardBgColor  py-[20px] px-4 rounded-lg lg:px-11 lg:py-14'>
        <div className='flex items-center gap-2 '>
        <div className="w-2 h-2 bg-TertiarTextColor rounded-full"></div>
        <h1 className='text-TertiarTextColor font-bold md:text-2xl'>Recent Work</h1>
        </div>

        <div>
          <RecentWork/>
        </div>
      </div>

      {/* <div className='flex flex-col gap-2'>
        <Gradient2 sens="tr" content="Product design"/>
        <div>
          <Gradient1 sens="tr" content="User Experience"/>
          <Gradient1 sens="bl" content="NoCode develop"/>
        </div>
      </div> */}
    </div>
  )
}

export default Section