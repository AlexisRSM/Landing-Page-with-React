function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand fs-2" href="">AR</a>
                <img src="https://as1.ftcdn.net/v2/jpg/01/69/82/74/1000_F_169827402_tMSVpgDKq9cHZrHMIaKQTNzp1ImcT7RC.jpg" alt="..." width="30" height="30" className="d-inline-block align-text-top rounded"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item fs-2">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item fs-3">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item fs-3">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item fs-3">
                            <a className="nav-link" aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;