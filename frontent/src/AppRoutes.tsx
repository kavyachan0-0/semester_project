
import { Route, Routes } from "react-router-dom"
    
const AppRoutes = () => {
    return(
        <Routes>
            <Route path ="/" element ={<span> HOME PAGE</span>}/>
            <Route path ="/user profile" element ={<span> USER PROFILE PAGE</span>}/>
            
    

        </Routes>
    );
};
export default AppRoutes;