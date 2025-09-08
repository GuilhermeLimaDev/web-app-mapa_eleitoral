import {Routes, Route, Router} from 'react-router-dom'
import Login from '../pages/login/Login'

const AppRoutes = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes