import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users)
  return (
    <div id='rightContent' className='h-full flex flex-nowrap overflow-x-auto gap-10 p-6 w-2/3 relative'>
      {/* <div className='fixed top-0 left-0 h-full w-full bg-gradient-to-r from-white via-transparent to-white via-10% to-300% z-10 '></div> */}
      {props.users.map(function(elem, idx){
        return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} color={elem.color} />
      })}
    </div>
  )
}

export default RightContent