const fetchBreedList = async (e) => {
  if (!e.queryKey[0]) return [];

  const res = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${e.queryKey[0]}`
  );

  if (!res.ok) {
    throw new Error(`breeds /${e.queryKey[0]} fetch not ok`);
  }

  return res.json();
};

export default fetchBreedList;
