import React from 'react'
import  {render} from 'react-dom'
import { Home } from '/assets/ui/pages/Home'
import { Rain }  from '/assets/ui/pages/Rain'
import { Asocial } from '/assets/ui/pages/Asocial'
import { Contact } from '/assets/ui/pages/Contact'
import { Remind } from '/assets/ui/pages/Remind'
import { Membrane } from '/assets/ui/Membrane'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Terms } from '/assets/ui/static/Terms'
import { Privacy } from '/assets/ui/static/Privacy'
import { Test } from '/assets/ui/Test'




const rootElement = document.getElementById('membrane')

export const Handle404 = (props) => {
    let metas = [['errorpage', 'true'], ['errortype', '404 - Not Found'], ['prerender-status-code', '404']]
    
    metas.map((meta) => {
        let metaTag = document.createElement('meta')
        metaTag.setAttribute('name', meta[0])
        metaTag.setAttribute('content', meta[1])
        document.head.appendChild(metaTag)
    })

  return(
    <div>
      <h1>404</h1>
    </div>
  )
}

  render(
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<Membrane><Home /></Membrane>} />
      <Route path="/rain" element={<Membrane><Rain /></Membrane>} />
      <Route path="/asocial"  element={<Membrane><Asocial /></Membrane>} />
      <Route path="/remind" element={<Membrane><Remind /></Membrane>} />
      <Route path='/mail' element={ <Membrane><Contact /></Membrane>  } />
      <Route path='/test' element={ <Membrane><Test /></Membrane>  } />
      <Route path='*' element={ <Membrane><Handle404 /></Membrane> }/>
      <Route path='/terms-of-use' element={ <Membrane><Terms /></Membrane>  } />
      <Route path='/privacy' element={ <Membrane><Privacy /></Membrane>  } />

      
    </Routes>
    </BrowserRouter>, 
    rootElement
  ) 


