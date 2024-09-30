import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { Suspense } from "react";
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const actualMonth = t('monthNames')[new Date().getMonth()];

  return (
    <Suspense fallback="Cargando Traducciones">
      <main className="bg-gray-100 dark:bg-zinc-900">
        <NavBar initialMonth={actualMonth} darkMode={"dark"} />
        <Main />
      </main>
    </Suspense>
  );
}

export default App;
