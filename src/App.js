import NavBar from "./components/NavBar";
import { Suspense } from "react";
import { useTranslation } from 'react-i18next';

function App() {
  
  const { t } = useTranslation();
  const actualMonth = t('monthNames')[new Date().getMonth()];

  return (
    <Suspense fallback="Cargando Traducciones">
      <main className="contaner">
        <NavBar initialMonth={actualMonth} darkMode={"dark"} />
      </main>
    </Suspense>
  );
}

export default App;
