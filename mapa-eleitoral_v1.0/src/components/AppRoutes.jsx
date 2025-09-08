import {Routes, Route, Router} from 'react-router-dom'
import Login from '../pages/login/Login'

const AppRoutes = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes