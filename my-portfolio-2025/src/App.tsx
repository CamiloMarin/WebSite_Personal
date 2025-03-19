import './App.css'
import { SectionContainer } from './components/SectionContainer/SectionContainer';


function App() {
  return (
    <>
      <h1>Vite + React</h1>

      <SectionContainer id='section1' className='flex items-center justify-center' height={300}>
          <h2>Primera sección</h2>
      </SectionContainer>

    </>
  )
}

export default App
