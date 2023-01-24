import { RouterProvider } from 'react-router-dom';
import router from './routers/router';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    // Retourne le composant RouterProvider avec l'objet router en props  
    <RouterProvider router={router} />
  );
}

export default App;
