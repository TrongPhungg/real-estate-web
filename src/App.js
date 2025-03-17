
import './App.css';
import DefaultLayout from "../src/components/Layout";
import { Home } from './resources/views';
import { Fragment, useEffect } from 'react';
import { publicRoutes } from './routes';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
   useEffect(()=>{
      document.title="Thuê nhà BMT";
   },[])
  return (
    <Router>
         <div className="App">
            <Routes>
               {publicRoutes.map((route,index) => {
                  const Page = route.component;

                  let Layout = DefaultLayout;
                  if(route.layout)
                     Layout = route.layout;
                  else if(route.layout === null){
                     Layout=Fragment;
                  }
                  return <Route key={index} path={route.path} element={<Fragment><Layout><Page></Page></Layout></Fragment>}></Route>
               })}
            </Routes>
         </div>
      </Router>
  );
}

export default App;
