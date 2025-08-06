import '../App.css'
interface TimelineProps  {
  color? : string
}
const Timeline : React.FC<TimelineProps> = ({color }) => {
  return (
    
      <div className={`${color} w-100/100 h-[6px] rounded-full`}></div>
  )
}
export default Timeline
