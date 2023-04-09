import './App.css';
import Product from './components/Product';
import Cities from "./landing/Cities";
import Home from "./landing/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, BrowserRouter } from "react-router-dom";
import AllRoutes from './All ROUTES/Routes/Allroutes';
import Tarrif from './amit/Tarrief page/Tarrief';
import Partner from './amit/Partner/Partner';
import Payment from './Checkout/Checkout/Payment';
import PaymentDetails  from "./Checkout/Checkout/PaymentDetails"
import Signup from './amit/LogSign/Signup';
import Login from './amit/LogSign/Login';
import Homel from './landing/Homel';
function App() {
  return (
    <div className="App">{
    // Product()
    //meranaaa
    //sjd
    <BrowserRouter>
     
      <Routes>         
        <Route path="/" element={<Cities/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/find-ride" element={<Homel/>}/>
        <Route path="/tarrif" element={<Tarrif/>}></Route>
        <Route path="/partner with us" element={<Partner/>}></Route>
        <Route path="/Home/Product" element={<Product />}></Route>
        <Route path="/Home/Product/PaymentDetails" element={<PaymentDetails />}></Route>
        <Route path="/Home/Product/PaymentDetails/Payment" element={<Payment />}></Route>
        </Routes>
      </BrowserRouter>
}
    </div>
  );
}

export default App;
