import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";  // Importer le layout
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TopRated from "./pages/Toprated";  // Importer la page TopRated
import MovieDetails from "./pages/MovieDetails";  // Importer la page MovieDetails

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {/* Route principale avec Layout comme composant parent */}
        <Route path="/" element={<Layout />}>
          {/* Route de la page TopRated */}
          <Route index element={<TopRated />} /> 
          {/* Route pour afficher les détails d'un film */}
          <Route path="movie/:id" element={<MovieDetails />} />  
        </Route>
        {/* Route pour les pages non trouvées */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
