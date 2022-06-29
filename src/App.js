import './App.css';
import LoadingBar from 'react-top-loading-bar'

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = (props) => {
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSize = 10


  // state = {
  //   progress: 0
  // }

  // setProgress = (progress) => {
  //   this.setState({progress: progress})
  // }
  return (
    <>
      <div>
        <Router>

          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          {/* <News setProgress={setProgress} apiKey={apiKey} apiKey={apiKey} pageSize={pageSize} country="in" category="general" /> */}

          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" setPageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" setPageageSize={pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" setPageageSize={pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" setPageageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" setPageageSize={pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" setPageageSize={pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" setPageageSize={pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" setPageageSize={pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;