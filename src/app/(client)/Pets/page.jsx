// Ce fichier est un Server Component
import React from "react";
import { getAllPets } from "../server/getAllPets";
import PetProducts from "./PetProducts"; 

export default async function PetProductsPage({ searchTerm = "", cart = [] }) {
  const pets = await getAllPets(); 
  return (
    <PetProducts pets={pets} searchTerm={searchTerm} cart={cart} />
  );
}
