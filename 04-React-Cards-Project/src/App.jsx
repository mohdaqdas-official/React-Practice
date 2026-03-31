
import Card from './Components/Card'
import Head from './Components/Head'


const App = () => {
  
  const jobOpenings = [
  {
    id: 1,
    brandLogo: "https://img.icons8.com/color/96/google-logo.png",
    companyName: "Google",
    datePosted: "10 days ago",
    post: "Frontend Developer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    brandLogo: "https://img.icons8.com/ios-filled/100/mac-os.png",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part-Time",
    tag2: "Mid Level",
    pay: "$38/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    brandLogo: "https://img.icons8.com/color/96/meta.png",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    brandLogo: "https://img.icons8.com/color/96/amazon.png",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Pune, India"
  },
  {
    id: 5,
    brandLogo: "https://images.icon-icons.com/2699/PNG/512/netflix_logo_icon_170919.png",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Delhi, India"
  },
  {
    id: 6,
    brandLogo: "https://img.icons8.com/color/96/microsoft.png",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Software Engineer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Noida, India"
  },
  {
    id: 7,
    brandLogo: "https://i.pinimg.com/736x/7d/3a/a4/7d3aa450915125e7948175e1123a199a.jpg",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "JavaScript Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Gurgaon, India"
  },
  {
    id: 8,
    brandLogo: "https://img.icons8.com/color/96/nvidia.png",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    post: "AI Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Chennai, India"
  },
  {
    id: 9,
    brandLogo: "https://img.icons8.com/color/96/tesla-logo.png",
    companyName: "Tesla",
    datePosted: "8 days ago",
    post: "Data Analyst",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Mumbai, India"
  },
  {
    id: 10,
    brandLogo: "https://img.icons8.com/color/96/oracle-logo.png",
    companyName: "Oracle",
    datePosted: "10 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$52/hr",
    location: "Bangalore, India"
  },
  {
    id: 11,
    brandLogo: "https://img.icons8.com/color/96/google-logo.png",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Backend Developer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$47/hr",
    location: "Bangalore, India"
  },
  {
    id: 12,
    brandLogo: "https://img.icons8.com/color/96/microsoft.png",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Support Engineer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$39/hr",
    location: "Hyderabad, India"
  },
  {
    id: 13,
    brandLogo: "https://img.icons8.com/color/96/amazon.png",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "SDE Intern",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$28/hr",
    location: "Pune, India"
  },
  {
    id: 14,
    brandLogo: "https://img.icons8.com/ios-filled/100/mac-os.png",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Mumbai, India"
  },
  {
    id: 15,
    brandLogo: "https://img.icons8.com/color/96/meta.png",
    companyName: "Meta",
    datePosted: "4 days ago",
    post: "Frontend Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$49/hr",
    location: "Delhi, India"
  },
  {
    id: 16,
    brandLogo: "https://img.icons8.com/color/96/netflix.png",
    companyName: "Netflix",
    datePosted: "9 days ago",
    post: "DevOps Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$62/hr",
    location: "Chennai, India"
  },
  {
    id: 17,
    brandLogo: "https://i.pinimg.com/736x/7d/3a/a4/7d3aa450915125e7948175e1123a199a.jpg",
    companyName: "Adobe",
    datePosted: "5 days ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$43/hr",
    location: "Noida, India"
  },
  {
    id: 18,
    brandLogo: "https://img.icons8.com/color/96/nvidia.png",
    companyName: "NVIDIA",
    datePosted: "11 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$66/hr",
    location: "Bangalore, India"
  },
  {
    id: 19,
    brandLogo: "https://img.icons8.com/color/96/oracle-logo.png",
    companyName: "Oracle",
    datePosted: "2 weeks ago",
    post: "Database Engineer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$46/hr",
    location: "Hyderabad, India"
  },
  {
    id: 20,
    brandLogo: "https://img.icons8.com/color/96/tesla-logo.png",
    companyName: "Tesla",
    datePosted: "7 days ago",
    post: "Data Engineer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$41/hr",
    location: "Pune, India"
  },
  {
    id: 21,
    brandLogo: "https://img.icons8.com/color/96/spotify.png",
    companyName: "Spotify",
    datePosted: "3 days ago",
    post: "Android Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$44/hr",
    location: "Mumbai, India"
  },
  {
    id: 22,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJIOGtHi6yLhWs9gI0Bz1T83KoUzuqCQ7IQ&s",
    companyName: "Uber",
    datePosted: "8 days ago",
    post: "Software Engineer I",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Bangalore, India"
  },
  {
    id: 23,
    brandLogo: "https://img.icons8.com/color/96/airbnb.png",
    companyName: "Airbnb",
    datePosted: "12 days ago",
    post: "React Native Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Delhi, India"
  },
  {
    id: 24,
    brandLogo: "https://img.icons8.com/color/96/salesforce.png",
    companyName: "Salesforce",
    datePosted: "2 days ago",
    post: "Salesforce Developer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$45/hr",
    location: "Hyderabad, India"
  },
  {
    id: 25,
    brandLogo: "https://cdn.iconscout.com/icon/free/png-256/free-intel-logo-icon-svg-download-png-3030074.png",
    companyName: "Intel",
    datePosted: "6 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$57/hr",
    location: "Chennai, India"
  },
  {
    id: 26,
    brandLogo: "https://img.icons8.com/color/96/sap.png",
    companyName: "SAP",
    datePosted: "1 week ago",
    post: "Java Developer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$37/hr",
    location: "Bangalore, India"
  },
  {
    id: 27,
    brandLogo: "https://img.icons8.com/color/96/ibm.png",
    companyName: "IBM",
    datePosted: "10 days ago",
    post: "Cybersecurity Analyst",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$42/hr",
    location: "Noida, India"
  },
  {
    id: 28,
    brandLogo: "https://img.icons8.com/color/96/paypal.png",
    companyName: "PayPal",
    datePosted: "4 days ago",
    post: "Full Stack Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$53/hr",
    location: "Mumbai, India"
  },
  {
    id: 29,
    brandLogo: "https://img.icons8.com/color/96/linkedin.png",
    companyName: "LinkedIn",
    datePosted: "5 days ago",
    post: "Product Engineer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$51/hr",
    location: "Bangalore, India"
  },
  {
    id: 30,
    brandLogo: "https://img.icons8.com/color/96/dropbox.png",
    companyName: "Dropbox",
    datePosted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$43/hr",
    location: "Pune, India"
  }
];

  return (
    <div className='parent'>
      <Head />
      <div className="cardholder">
        {jobOpenings.map(function(elem, idx){
          return <div key={idx}>
            <Card companyLogo={elem.brandLogo} company={elem.companyName} post={elem.post} postDate={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
          </div>
        })} 
      </div> 
    </div>
  )
}

export default App