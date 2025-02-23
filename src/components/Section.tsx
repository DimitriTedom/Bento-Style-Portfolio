import Gradient1 from './Gradient1'
import Gradient2 from './Gradient2'
import RecentWork from './RecentWork'
import './Section.css'
const Section = () => {
  return (
    <div className="Container">
      <div className='flex flex-col gap-6 cardBorder bg-CardBgColor  py-[20px] px-4 rounded-lg lg:px-11 lg:py-14'>
        <div className='flex items-center gap-2 '>
        <div className="w-4 h-4 bg-TertiarTextColor rounded-full buble"></div>
        <h1 className='text-TertiarTextColor font-bold md:text-2xl'>Recent Work</h1>
        </div>

        <div>
          <RecentWork/>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <Gradient2 content="Product design"/>
        <div className='grid grid-cols-2 gap-3 lg:gap-5'>
          <Gradient1  content="User Experience" />
          <Gradient1  content="NoCode develop"/>
        </div>
      </div>
    </div>
  )
}

export default Section