import Navbar from "../components/Dashboard/Navbar/Navbar"
import Sidebar from"../components/Dashboard/Sidebar/Sidebar"
import Footer from "../components/Dashboard/Footer/Footer"
function Dashboard(){
    return(
        <>
         <Navbar adminName="Ahmed" />
        <h1>test board</h1>
       <Sidebar />
       <Footer/>

        </>
    )
}
export default Dashboard