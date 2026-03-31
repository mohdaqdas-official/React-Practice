import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
  return (
    <div className="h-full w-90 rounded-4xl overflow-hidden relative shrink-0">
       <img className="h-full w-full object-cover" src={props.img} alt="Card Image" />
       <RightCardContent id={props.id} intro={props.intro} tag={props.tag} color={props.color} />
    </div>
  )
}

export default RightCard