
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes ,Route, Link } from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Details from "./Details";
import SearchParams from "./SearchParams";

const queryClient=new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:Infinity,
      cacheTime:Infinity
    }
  }
});





  const App2 =()=>{
    
    return(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <header>
      <Link to={"/"}>Adopt Me!</Link>
      </header>
        <Routes>
          <Route path="details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider> 
    )
    
  }


  const container2 = document.getElementById("root2");
  const body = createRoot(container2);
  body.render(<App2 />);