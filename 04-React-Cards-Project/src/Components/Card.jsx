import {Bookmark} from 'lucide-react'
import {TrendingUpDown} from 'lucide-react'

const Card = (props) => {
    
  return (
    <div className="card">
        <div className='upper'>
            <div className="top">
            <img src={props.companyLogo} alt="" />
            <button>Save <Bookmark size={12} /></button>
        </div>
        <div className="center">
            <h3>{props.company} <span>{props.postDate}</span></h3>
            <h2>{props.post}</h2>
            <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
            </div>
        </div>
        </div>
        <div className="bottom">
        <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
        </div>
        <button>Apply Now <TrendingUpDown size={16} /></button>
        </div>
    </div>
  )
}

export default Card