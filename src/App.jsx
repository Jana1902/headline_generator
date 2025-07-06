import "./app.css";
import DisplayCard from "./components/DisplayCard";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="relative min-h-dvh p-10 bg-[url(./assets/seo_background_svg.jpg)] bg-cover" >
      <Header />
      <section className="flex flex-col md:flex-row items-start gap-4 md:justify-center text-dark">
        <InputForm />
        <DisplayCard />
      </section>
      <Toaster />
    </div>
  );
};

export default App;
