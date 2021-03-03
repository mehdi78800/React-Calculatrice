import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-link">
                        <Link className="nav-item active " to='/'>Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link className="nav-item " to='/game'>Game</Link>
                    </li>
                    <li className="nav-link">
                        <Link className="nav-item " to='/score'>Score</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar;