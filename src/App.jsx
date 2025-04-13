import { Suspense } from 'react'
import './App.css'
import DataInformation from './Components/MemberShip Card/DataInformation'
import NavBar from './Navbar/NavaBar/NavBar'
import ResultData from './Components/Result data/ResultData'
import MarksChart from './Components/Marks Chart/MarksChart'
import axios from 'axios'
function App() {
  const DataTaken =  async() =>{
    const res = await fetch('MemberShip.json')
    return res.json()
  }
const DataAllCard = DataTaken()
const ResultDataALL =  fetch('Result.json').then(res=> res.json());

const marksPromiseSend = axios.get('Marks.json')
  return (
    <>
    {/* <DaisyBar></DaisyBar> */}
    <NavBar></NavBar>
    <div className='grid justify-center'>
    {
      <Suspense fallback={<h1>Data Loading ......</h1>}>
      <DataInformation DataAllCard={DataAllCard}></DataInformation>
      </Suspense>
    }
    </div>
    <div>
      {<Suspense>
        <ResultData ResultDataALL={ResultDataALL}></ResultData>
      </Suspense>   
      }
    </div>

    <div>
      <Suspense>
        <MarksChart marksPromiseSend={marksPromiseSend}></MarksChart>
      </Suspense>
    </div>
    </>
  )
}

export default App
