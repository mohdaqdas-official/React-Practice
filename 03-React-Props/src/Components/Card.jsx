const Card = (props) => {
  return (
    <div className='Card'>
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>I am {props.age} years old.</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card