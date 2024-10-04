import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

function App() {
  return (
    <main className="bg-gray-100">
      <Toaster position="top-right"/>
      <Home />
    </main>
  );
}

export default App;
