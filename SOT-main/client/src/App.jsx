import React from "react";
import AppRouter from "./routes/AppRouter";
import Navbar from "./componets/layout/NavBar";
import Footer from "./componets/layout/Footer";

function App() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
