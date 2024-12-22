import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import TopRated from "./pages/Toprated";
import MovieDetails from "./pages/MovieDetails";
import { Upcoming } from "./pages/Upcoming";
import { Popular } from "./pages/Popular";
import Home from "./pages/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NewsletterForm from "./pages/newsLetter";
const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="toprated" element={<TopRated />} />
          <Route path="movie/:id" element={<MovieDetails />} />

          <Route path="popular" element={<Popular />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="newsletter" element={<NewsletterForm />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
