import Section from 'components/Section'
import songs from 'data/songs';

function Home() {

  return (
    <div className='grid gap-y-8'>
        <Section
          title='Recently played'
          more='./nmk'
          items={songs}
         />
         <Section
          title='Shows to try'
          more='./nmk'
          items={songs}
         />
         <Section
          title='Made For Muhammad Ormdv'
          more='./nmk'
          items={songs}
         />
    </div>
  )
}
export default Home;