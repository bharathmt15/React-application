// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
// import Propdrilling from "./PropsDrilling/Propdrilling";

// previously used components
import Ecomstore from "./Components/Ecomstore";
// import Counter from "./Components/Counter";
// import Todolist from "./Components/Todolist";
// import Home from "./Components/Home.js";
// import Fruits from "./Components/Fruits";
// import Employee from "./Components/Employee";
// import Fruitsapp2 from "./Components/Fruitsapp2";

// import Idly from "./Components/Navbar/Idly";
// import Dosa from "./Components/Navbar/Dosa";
// import Bonda from "./Components/Navbar/Bonda";
// import Vada from "./Components/Navbar/Vada";
// import Roti from "./Components/Navbar/Chappati";
// import Puri from "./Components/Navbar/Puri";
// import Allfood from "./Components/Navbar/Allfood";
import "./App.css";

function App() {
    return (
        <Ecomstore />
        // <Router>
        //     <Navbar />
        //     <Routes>
        //         <Route path="/Idly" element={<Idly />} />
        //         <Route path="/Dosa" element={<Dosa />} />
        //         <Route path="/Bonda" element={<Bonda />} />
        //         <Route path="/Vada" element={<Vada />} />
        //         <Route path="/Puri" element={<Puri />} />
        //         <Route path="/Roti" element={<Roti />} />
        //         <Route path="/All_tiff" element={<Allfood />} />
        //     </Routes>
        // </Router>
    );
}

export default App;
