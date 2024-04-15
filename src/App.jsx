import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import Page1 from './components/page1'
import Page2 from './components/page2'
import Page3 from './components/page3'

function App() {
  const [page,setPage]=useState(0);
  if(page==0){
    return (  
      <>
       <Home setPage={setPage}/> 
      
      </>
    )
  }
   else if(page==1){
    return (
      <>
       <Page1 setPage={setPage} />
      </>
    )
   }
   else if(page==2){
    return (
      <>
       <Page2 setPage={setPage}/>
      </>
    )
   }
    else{
      return (
   
        <>
        
         <Page3 setPage={setPage}/>
        </>
      )
    }
}

export default App
