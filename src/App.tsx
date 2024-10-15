import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <main className="bg-gray-100">
      <Toaster position="top-right" />
      <Home />
    </main>
  );
}

export default App;
