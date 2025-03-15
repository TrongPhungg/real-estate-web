
import './App.css';
import {Header} from "../src/components/Layout";
import { Home } from './resources/views';
import { Fragment } from 'react';
import { publicRoutes } from './routes';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
         <div className="App">
            <Routes>
               {publicRoutes.map((route,index) => {
                  const Page = route.component;

                  let Layout = Header;
                  if(route.layout)
                     Layout = route.layout;
                  else if(route.layout === null){
                     Layout=Fragment;
                  }
                  return <Route key={index} path={route.path} element={<Fragment><Layout></Layout><Page></Page></Fragment>}></Route>
               })}
            </Routes>
         </div>
      </Router>
  );
}

export default App;
