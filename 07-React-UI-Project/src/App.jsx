import Navbar from './components/Section-1/Navbar'
import Section1 from './components/Section-1/Section-1'
import Section2 from './components/Section-2/Section-2'


const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '"Satisfied" from Hamilton opens with a high-energy orchestral swell followed by a celebratory, rhythmic toast led by Angelica Schuyler (Renée Elise Goldsberry).',
      color: 'blue',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Underserved populations are groups facing systematic barriers to accessing essential services like healthcare, education, or technology, often defined by income, geography, race, or disability.',
      color: 'lightseagreen',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1542330952-bffc55e812b2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Underbanked individuals possess traditional bank accounts (checking or savings) but rely heavily on alternative financial services—such as payday loans, check-cashing services, or money orders—to manage finances.',
      color: 'pink',
      tag: 'UnderBanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1522199899308-2eef382e2158?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '"Underrated Intro" refers to several musical tracks, including a 2024 single by Ziggy Zig Zag and a 2020 track by RollGangTV.',
      color: 'black',
      tag: 'Underrated'
    },
    {
      img: 'https://images.unsplash.com/photo-1507209575474-fa61e9d3086b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Ranked mode in competitive games, such as Brawl Stars, often features a progression from Best of 1 in lower ranks (Bronze to Gold) to Best of 3 in higher tiers (Diamond to Pro).',
      color: 'grey',
      tag: 'Ranked'
    }
  ]
  return (
    <div>
      <Navbar />
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App