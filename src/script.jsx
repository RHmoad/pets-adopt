
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";



  const App2 =()=>{
    
    return(
    // <StrictMode>
    <BrowserRouter>
      <h1>Adopt Me!</h1>
      <Routes>
        <Route path="details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
      /* </StrictMode> */
    )
    
  }


  const container2 = document.getElementById("root2");
  const body = createRoot(container2);
  body.render(<App2 />);