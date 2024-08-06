import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { WeatherPage } from "./pages/WeatherPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="weather/:city" element={<WeatherPage />} />
      </Route>
    </Routes>
  );
}

export default App;
