import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import Footer from "../../components/Dashboard/Footer/Footer";
import HomeDashboard from "./HomeDashboard"
import Users from "./Users"
import Projects from "./Projects"
import Developers from './Developers'
import CMS from "./CMS";
import Chat from "./Chat";
import TableDashboard from "../../components/ui/TableDashboard/TableDashboard.jsx";
import FormDashboard from "../../components/ui/FormDashboard/FormDashboard.jsx";
function Dashboard() {
  return (
    <>
      <Navbar adminName="Ahmed" />
      <div className="d-flex">
        <Sidebar />

        <main className="flex-grow-1">
          <Routes>
            <Route path='/' element={<HomeDashboard/>}/>
            <Route path='/Users' element={<Users/>}>
                  <Route index element={<TableDashboard name ="users"/>}/>
                  <Route path='add' element={<FormDashboard />}/>
            </Route>
            <Route path='/Projects' element={<Projects/>}>
                <Route index element={<TableDashboard name ="Projects"/>}/>
                <Route path='add' element={<FormDashboard />}/>
            </Route>
            <Route path='/Developers' element={<Developers/>}>
                <Route index element={<TableDashboard name ="Developers"/>}/>
                <Route path='add' element={<FormDashboard />}/>
            </Route>

            <Route path='/CMS' element={<CMS/>}/>
            <Route path='/Chat' element={<Chat/>}/>
          </Routes>
        </main>
      </div>

      <Footer />
    </>
  );
}
export default Dashboard;
