import './App.scss';
import Header from './comp/Header'
import Tabs from './comp/Tabs'
import RecipeLists from './comp/RecipeLists'
import { useState } from 'react';

function App() {
  const [loader,setLoader] = useState(true)
  return (
    <div className="main">
      <Header />
      <Tabs setLoader={setLoader}/>
      <RecipeLists setLoader={setLoader}/>
      {loader && <div className='loader'>
        <div className='spinner'></div>
        </div>}
    </div>
  );
}

export default App;
