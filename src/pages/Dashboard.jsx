import Navbar from "../components/Dashboard/Navbar/Navbar"
import Sidebar from"../components/Dashboard/Sidebar/Sidebar"
import Footer from "../components/Dashboard/Footer/Footer"
function Dashboard(){
    return(
        <>
         <Navbar adminName="Ahmed" />
        <div className="d-flex"> 
           
       <Sidebar />

<main className="flex-grow-1"><h1>test board</h1></main>
        
       </div>
       

       <Footer/>

        </>
    )
}
export default Dashboard