import NavBar from "./components/NavBar";

function App() {
  const actualMonth = new Date().getMonth() + 1;
  return (
    <main className="contaner">
      <NavBar initialMonth={actualMonth} darkMode={"noche"} lang={"es"}/>
    </main>
  );
}

export default App;
