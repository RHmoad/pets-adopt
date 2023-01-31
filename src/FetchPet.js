const fetchPet = async (e) => {
  console.log(e.queryKey[0]);
  const pet = await fetch(
    `http://pets-v2.dev-apis.com/pets?id=${e.queryKey[0]}`
  );
  if (!pet.ok) {
    throw new Error("Data not fetched ");
  }
  let json = await pet.json();
  return json;
};

export default fetchPet;
