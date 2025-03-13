// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Base } from './components';
// import { Login, Register } from './views';

// const AppRoutes = () => {
  
//   return (
//     <Router>
//       <Base>
//         <Routes>
//           <Route path="/login" element={<Register />}/>
//           <Route path="/register" element={<Register />}/>
//           <Route path="/" element={<div>aaaaaaaaaaa</div>}/>
//         </Routes>
//       </Base>
//     </Router>
//   );
// };

// export default AppRoutes;

import React from "react";
import "./App.css";
import InternalRoutes from "./routes/InternalRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/auth";
import AlertProvider from "./contexts/alert";

function App() {
  return (
    <BrowserRouter>
      <AlertProvider>
        <AuthProvider>
          <InternalRoutes />
        </AuthProvider>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
