import { Link } from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap'

const MyNavbar = () => {

    return (
        // <div className="row">
        //     <nav className="navbar navbar-expand-md navbar-light bg-light col-12 mb-4">
        //         <Link className="navbar-brand" to="/">Calcul Mental</Link>
        //         <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNav">
        //             <ul className="navbar-nav mr-auto">
        //                 <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        //                 <li className="nav-item"><Link className="nav-link" to="/game">Game</Link></li>
        //                 <li className="nav-item"><Link className="nav-link" to="/score">Score</Link></li>
        //             </ul>
        //         </div>
        //     </nav>
        // </div>
        <div className="row">
            <Navbar className="col-12 mb-4" bg="dark" variant="dark" expand="lg" sticky="top">
                <Link className="navbar-brand" to="/">Calcul Mental</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/game">Game</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/score">Score</Link></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )

}

export default MyNavbar;