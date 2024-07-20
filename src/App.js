import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route,Routes } from "react-router-dom";
import TopBar from "./Scenes/global/TopBar";
import SideBar from "./Scenes/global/SideBar";
import Dashboard from "./Scenes/dashboard";
import { useState } from "react";
import Team from "./Scenes/team";
import Invoices from "./Scenes/invoices";
import Contacts from "./Scenes/contacts";
import Form from "./Scenes/form";
import Calendar from "./Scenes/calendar";
import FAQ from "./Scenes/faq";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <SideBar isSidebar={isSidebar} />
          <main className="content">
          <TopBar setIsSidebar={setIsSidebar} />
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/calender" element={<Calendar/>}/>
              <Route path="/faq" element={<FAQ/>}/>
          </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
