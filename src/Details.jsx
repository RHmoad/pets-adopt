import fetchPet from "./FetchPet";
import { useParams } from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import Pet from "./Pet";



const Details = () => {
  const params=useParams();
  console.log(params);
   
    const resQuery=useQuery([params.id],fetchPet)
    console.log(resQuery)

    if(resQuery.isLoading){
      return (
        <div className="loading-pane">
          <h2 className="loader">🌀</h2>
        </div>
      );
    }

    const pet = resQuery.data.pets[0];
    const { name, animal, breed, images, location, id } = pet;
     let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
    if (images.length) {
      hero = images[0];
    }
    return (
      <div>
            <div className="image-container">
            <img src={hero} alt={name} />
          </div>
      <div className="details">
          <h1>{pet.name}</h1>
          <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </div>
      </div>
    );
  };
  ;
  
export default Details;