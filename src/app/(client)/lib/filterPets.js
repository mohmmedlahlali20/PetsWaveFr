export function filterPets(pets, searchTerm) {
    return pets.filter((pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  