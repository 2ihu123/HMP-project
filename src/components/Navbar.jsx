import React from 'react'
import { Link ,json,useNavigate} from 'react-router-dom'

export default function Navbar() {
    const navigate=useNavigate();
    const logouthandle=()=>{
       
       localStorage.removeItem("token");
       navigate("/");
     }
    return (
        <div id='Navbar'>
            <nav className="navbar navbar-expand-lg bg-light" style={{ height: "70px" }} id='nav'>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><h2>H.M.P</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Hostel rules</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Mess commitee</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About Us</Link>
                            </li>
                        </ul>
                    </div>
                    {(!localStorage.getItem("token" , json.token))?
                    <div id='but'>
                        <Link to='/login'>
                        <button className='btn'>Login</button>
                        </Link>
                    </div>:""}

                    {(!localStorage.getItem("token" , json.token))?
                    <div id='but'>
                        <Link to='/createuser'>
                        <button className='btn'>SignUp</button>
                        </Link>
                    </div>:
                    <div id='but'>
                    <Link >
                    <button className='btn' onClick={logouthandle}>Logout</button>
                    </Link>
                </div>
                    }
                </div>
            </nav>
        </div>
    )
}
