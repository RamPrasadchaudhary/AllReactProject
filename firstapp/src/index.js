import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navi from './navi';
import Body from './body';
import Footer from './footer';
import  Form  from './form';
import Testimonial from './testimonial';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
       <App />
     
</div>

);







// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Login from './components/Login';
// import Landing from './components/Landing';
// import NotFound from './components/NotFound';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="Login" element={<Login/>} />
//       <Route path="/landing/:name/*" element={<Landing/>}/>
//       <Route path="*" element={<NotFound/>} />
//     </Routes>
//   </BrowserRouter>
// );
// reportWebVitals();
