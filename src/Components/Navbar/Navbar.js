import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark mx-auto">
                <Link className="navbar-brand text-white mx-4" to="/all_tiff">
                    Hot-Tiffins
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link
                                className="nav-link text-white me-2"
                                to="/Idly"
                            >
                                Idly
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white me-2"
                                to="/Dosa"
                            >
                                Dosa
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white me-2"
                                to="/Vada"
                            >
                                Vada
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white me-2"
                                to="/Puri"
                            >
                                Puri
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white me-2"
                                to="/Bonda"
                            >
                                Mysore Bonda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white me-2"
                                to="/Roti"
                            >
                                Chappati
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
