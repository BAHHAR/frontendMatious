// Importation de la bibliothèque axios pour effectuer des requêtes HTTP
import axios from "axios";

// Définition de l'URL du serveur backend
const BACKEND_URL='https://entretien-matious-backend.vercel.app/'

// Définition de la fonction GetMoyenneDeRatingParSexeService pour récupérer les données du serveur backend
const GetMoyenneDeRatingParSexeService=async()=>{

   // Effectue une requête GET au serveur backend
   const response=await axios.get(`${BACKEND_URL}MoyenneRatingParGender`)

   // Retourne les données de la réponse
   return response.data;       
}

// Exporte la fonction GetMoyenneDeRatingParSexeService pour son utilisation dans d'autres fichiers
export default GetMoyenneDeRatingParSexeService;