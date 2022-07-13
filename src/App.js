import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  // const apiKey = process.env.NEWS_API_KEY;
  const apiKey = '6179d0ae8a1e4c03be9b9cbcc371dc71'
  console.log(apiKey);

  return (
    <div className="App">
      <Navbar/>
      <div className="newsCont">
        <Routes>
          <Route exact path="/" element={<News key='general' apiKey={apiKey} category="general" />}/>
          <Route exact path="/business" element={<News key='business' apiKey={apiKey} category="business" />}/>
          <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} category="entertainment" />}/>
          <Route exact path="/health" element={<News key="health" apiKey={apiKey} category="health" />}/>
          <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} category="sports" />}/>
          <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} category="technology" />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
