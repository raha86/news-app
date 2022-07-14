import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import TopLoadingBar from './components/TopLoadingBar';

function App() {
  const [progress, setProgress] = useState("0%");
  // const apiKey = process.env.NEWS_API_KEY;
  const apiKey = '6179d0ae8a1e4c03be9b9cbcc371dc71'
  console.log(apiKey);

  return (
    <div className="App">
      <TopLoadingBar progress={progress}/>
      <Navbar/>
      <div className="newsCont">
        <Routes>
          <Route exact path="/" element={<News key='general' apiKey={apiKey} category="general" setProgress={setProgress}/>}/>
          <Route exact path="/business" element={<News key='business' apiKey={apiKey} category="business" setProgress={setProgress}/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} category="entertainment" setProgress={setProgress}/>}/>
          <Route exact path="/health" element={<News key="health" apiKey={apiKey} category="health" setProgress={setProgress}/>}/>
          <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} category="sports" setProgress={setProgress}/>}/>
          <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} category="technology" setProgress={setProgress}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
