import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";

import Index from "../components/Index";
  
// Création d'un routeur pour naviguer entre les pages
  const router = createBrowserRouter(
    // Création des routes à partir des éléments
    createRoutesFromElements(
       // Définition de la route principale qui affiche le composant Index
      <Route path="/" element={<Index />}/>
    )
  );

  // Exportation du routeur pour l'utiliser dans les autres fichiers
export default router