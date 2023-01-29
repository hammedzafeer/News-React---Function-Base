import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './Component/Navbar/Nav'
import News from './Component/News/News'
import LoadingBar from 'react-top-loading-bar'


const App = () =>{
  const pageSize = 10;
  const API = "dc05fa63f04e4d7ca0ce70f7eb0e7cf4";

  const [progress, setProgress] = useState(0);

    return (

      <div>
        <LoadingBar
          color='#f11946'
          height={4}
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Nav /> 
        {/* <News setProgress={setProgress} pageSize={pageSize} country="us" apiKey={API} category="general" /> */}
        <Routes >

          <Route exect path='/' element={<News setProgress={setProgress} key="general"
            pageSize={pageSize} country="us" apiKey={API} category="general" />} />
          <Route exect path='/general' element={<News setProgress={setProgress} key="general"
            pageSize={pageSize} country="us" apiKey={API} category="general" />} />
          <Route exect path='/business' element={<News setProgress={setProgress} key="business"
            pageSize={pageSize} country="us" apiKey={API} category="business" />} />
          <Route exect path='/entertainment' element={<News setProgress={setProgress} key="entertainment"
            pageSize={pageSize} country="us" apiKey={API} category="entertainment" />} />
          <Route exect path='/health' element={<News setProgress={setProgress} key="health"
            pageSize={pageSize} country="us" apiKey={API} category="health" />} />
          <Route exect path='/science' element={<News setProgress={setProgress} key="science"
            pageSize={pageSize} country="us" apiKey={API} category="science" />} />
          <Route exect path='/sports' element={<News setProgress={setProgress} key="sports"
            pageSize={pageSize} country="us" apiKey={API} category="sports" />} />
          <Route exect path='/technology' element={<News setProgress={setProgress} key="technology"
            pageSize={pageSize} country="us" apiKey={API} category="technology" />} />
        </Routes>
      </div>
    )
  
}

export default App;