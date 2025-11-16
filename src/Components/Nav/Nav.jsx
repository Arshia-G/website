import React from "react"
function Nav() {
    return (
        <>
        {/* Navigation Bar Component */}
        <div className="nav w11 fixed top bg-white shadow-sm">
            <nav className="navbar navbar-expand-lg py-3 justify-between align-items-center w-100 nav-wrapper">
                {/* toggle Button */}
                <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* {mobile logo} */}
                <a href="#" className="navbar-brand mx-auto order-0 d-lg none d-flex">
                    <h2 className="m-0 fw-bold" style={{letterSpacing:'2px'}}>WEAVES & TASSELS</h2>
                </a>
                {/* mobile icon */}
                <ul className="d-lg-none d-flex align-items-center gap-3">
                    <li className="nav-item">
                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#searchModal"
                            ><i className="bi bi-search fs-5 text-dark"></i>
                           </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#signupModal"
                            ><i className="bi bi-search fs-5 text-dark"></i>
                           </a>
                    </li>
                    <li className="nav-item position-relative">
                        <a
                            href="#">
                                <i className="bi bi-heart fs-5 text-dark"></i>
                                <span className="position-absolute top-0 start-100 translate-middle cart-count rounded-pill">0</span>
                           </a>
                    </li>
                    <li className="nav-item position-relative">
                        <a
                            href="#">
                                <i className="bi bi-bag fs-5 text-dark"></i>
                                <span className="position-absolute top-0 start-100 translate-middle cart-count rounded-pill">0</span>
                           </a>
                    </li>
                </ul>
                {/* main nav */}
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    {/* left nav */}
                    <ul className="navbar-nav nav-menu align-items-center gap-4">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">shop</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">store</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">blog</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}
export default Nav;