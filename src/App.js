import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';
import Home from './components/Home';
import Mac from './components/Mac';
import Search from './components/Search';
import IPhone from './components/IPhone';



function App() {
  const [data, setData] = useState([]);

  const updateData = (arr) => {
    setData(arr);
  }

  return (
    <div className="App">

        <header>
          <NavWrapper change={updateData}/>
        </header>

        <section className='main'>
          <SubNav data={data} />

          <Switch>
          <Route path="/mac">
            <Mac/>
          </Route>
          <Route path="/iPhone">
            <IPhone/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

        </section>

        
    </div>
  );
}

export default App;
