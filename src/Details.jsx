import { useState, useContext } from "react";
import fetchPet from "./FetchPet";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  const params = useParams();
  console.log(params);

  const resQuery = useQuery([params.id], fetchPet);
  console.log(resQuery);

  if (resQuery.isError) {
    return <h2>Ohno</h2>;
  }

  if (resQuery.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = resQuery.data.pets[0];
  console.log(pet.images);
  return (
    <div className="details">
      <Carousel images={pet.images} />

      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {
          // Ternary Operator don't get confused 😉
          showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {pet.name}?</h1>
                <div className="buttons"></div>
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  No
                </button>
              </div>
            </Modal>
          ) : null
        }
      </div>
    </div>
  );
};

function DatailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DatailsErrorBoundary;
