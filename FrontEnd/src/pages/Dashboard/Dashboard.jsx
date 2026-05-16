import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import Footer from "../../components/Dashboard/Footer/Footer";
import HomeDashboard from "./HomeDashboard";
import Users from "./Users";
import Projects from "./Projects";
import Developers from "./Developers";
import CMS from "./CMS";
import Chat from "./Chat";
import TableDashboard from "../../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../../components/ui/FormDashboard/FormDashboard";

function Dashboard() {
  const [dirtySections, setDirtySections] = useState({
    users: false,
    projects: false,
    developers: false,
  });

  return (
    <>
      <Navbar adminName="Ahmed" />
      <div className="d-flex">
        <Sidebar dirtySections={dirtySections} />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />

            <Route path="/Users" element={<Users />}>
              <Route index element={<TableDashboard name="users" />} />
              <Route path="add"element={<FormDashboard sectionKey="users" setDirtySections={setDirtySections}/>}/>
            </Route>

            <Route path="/Projects" element={<Projects />}>
              <Route index element={<TableDashboard name="Projects" />} />
              <Route path="add"element={ <FormDashboard sectionKey="projects" setDirtySections={setDirtySections}/>}/>
            </Route>

            <Route path="/Developers" element={<Developers />}>
              <Route index element={<TableDashboard name="Developers" />} />
              <Route path="add" element={<FormDashboard sectionKey="developers"setDirtySections={setDirtySections}/>} />
            </Route>

            <Route path="/CMS" element={<CMS />} />
            <Route path="/Chat" element={<Chat />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </>
  );
}
export default Dashboard;
