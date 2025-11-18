import React, { useState } from "react"

function Nav() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
        {/* Navigation Bar Component */}
        {/* FIX 3a: Removed minHeight to allow the mobile navbar to collapse and be thinner. */}
        <div className="nav w-100 fixed-top shadow-sm" style={{backgroundColor: '#fedbd9', zIndex: 1000}}>
            <nav className="navbar navbar-expand-lg py-2 justify-content-between align-items-center w-100 nav-wrapper" style={{paddingLeft: '2rem', paddingRight: '2rem'}}>
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
                
                {/* Center Logo - Mobile & Desktop */}
                <a href="#" className="navbar-brand mx-auto order-0 d-lg-none">
                    {/* FIX 3b: Reduced gap for thinner nav. */}
                    <div className="d-flex align-items-center gap-2">
                        {/* FIX 3b: Reduced height to 80px for thinner mobile navbar. */}
                        <img src="/src/assets/logo.png" alt="Logo" style={{height: '60px', width: 'auto'}} />
                        <div className="text-center">
                            <h2 className="m-0 fw-bold" style={{letterSpacing:'2px', fontFamily: 'var(--Newsreader)', fontSize: '1rem'}}>WEAVES & TASSELS</h2>
                            {/* FIX 3b: Adjusted size for mobile */}
                            <p className="m-0 fw-bold" style={{fontFamily: 'var(--Tangerine)', fontSize: '1.5rem',lineHeight: '1'}}>The Queens Contour</p>
                        </div>
                    </div>
                </a>
                
                {/* mobile icons */}
                {/* FIX 3c: Added justify-content-center to align icons better on mobile. */}
                <ul className="d-lg-none d-flex align-items-center gap-3 mb-0 justify-content-center"> 
                    <li className="nav-item">
                        <a href="#" onClick={(e) => { e.preventDefault(); setIsSearchOpen(!isSearchOpen); }}>
                            <i className="bi bi-search fs-5 text-dark"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#signupModal">
                            <i className="bi bi-person fs-5 text-dark"></i>
                        </a>
                    </li>
                    <li className="nav-item position-relative">
                        <a href="#">
                            <i className="bi bi-heart fs-5 text-dark"></i>
                            <span className="position-absolute top-0 start-100 translate-middle cart-count rounded-pill">0</span>
                        </a>
                    </li>
                    <li className="nav-item position-relative">
                        <a href="#">
                            <i className="bi bi-bag fs-5 text-dark"></i>
                            <span className="position-absolute top-0 start-100 translate-middle cart-count rounded-pill">0</span>
                        </a>
                    </li>
                </ul>
                
                {/* main nav */}
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    {/* left nav */}
                    <ul className="navbar-nav nav-menu align-items-center gap-4">
                        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">shop</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">store</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">contact</a></li>
                    </ul>
                    
                    {/* Center Logo - Desktop Only (FIXED TO ORIGINAL SPEC) */}
                    {/* FIX 3c: Added d-none d-lg-flex to prevent logo duplication when mobile menu is open. */}
                    <a href="#" className="navbar-brand order-0 d-none d-lg-flex">
                        <div className="d-flex align-items-center gap-2">
                            <img
                                src="/src/assets/logo.png"
                                alt="Logo"
                                style={{
                                    height: '160px',
                                    width: 'auto',
                                    maxHeight: 'none'
                                }}
                            />
                            <div className="text-start">
                                <h2 className="m-0 fw-bold" style={{ letterSpacing: '2px', fontFamily: 'var(--Newsreader)', fontSize: '2rem' }}>
                                    WEAVES & TASSELS
                                </h2>
                                <p className="m-0"
                                   style={{
                                       fontFamily: 'var(--Tangerine)',
                                       fontSize: '3rem',
                                       lineHeight: '0.8',
                                       fontWeight: 'bold',
                                       marginLeft: '60px'
                                   }}>
                                    The Queens Contour
                                </p>
                            </div>
                        </div>
                    </a>
                    
                    {/* Right nav spacer to balance layout */}
                    <div style={{width: '200px'}}></div>
                </div>
                
                {/* Right Icons - Desktop only */}
                <ul className="navbar-nav d-none d-lg-flex align-items-center gap-4 mb-0">
                    <li className="nav-item">
                        <a href="#" onClick={(e) => { e.preventDefault(); setIsSearchOpen(!isSearchOpen); }}>
                            <i className="bi bi-search fs-5 text-dark"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#signupModal">
                            <i className="bi bi-person fs-5 text-dark"></i>
                        </a>
                    </li>
                    <li className="nav-item position-relative">
                        <a href="#">
                            <i className="bi bi-heart fs-5 text-dark"></i>
                            <span className="position-absolute top-0 start-100 translate-middle cart-count rounded-pill">0</span>
                        </a>
                    </li>
                    <li className="nav-item position-relative">
                        <a href="#">
                            <i className="bi bi-bag fs-5 text-dark"></i>
                            <span className="position-absolute top-0 start-100 translate-middle cart-count rounded-pill">0</span>
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Search Bar - FIXED ALIGNMENT */}
            {isSearchOpen && (
                <div className="search-bar-container w-100 d-flex justify-content-center align-items-center shadow-sm" 
                    style={{
                        backgroundColor: '#fedbd9',
                        padding: '1rem 0', // Reduced vertical padding
                        borderTop: '1px solid rgba(0,0,0,0.1)',
                        position: 'absolute',  // FIX 2: Absolute position relative to the main div
                        top: '100%',           // Pushes it exactly below the nav bar
                        left: 0,
                        zIndex: 999
                    }}>
                    <div className="container">
                        {/* FIX 2: Added justify-content-center to the row for perfect centering */}
                        <div className="row justify-content-center"> 
                            <div className="col-11 col-md-8 col-lg-6">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg" // Added lg for better mobile touch
                                        placeholder="Search for products..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        autoFocus
                                        style={{border: '2px solid var(--black-color)', borderRadius: '25px 0 0 25px'}}
                                    />
                                    <button className="btn btn-dark px-4" type="button" style={{borderRadius: '0 25px 25px 0'}}>
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

        {/* Signup Modal */}
        <div className="modal fade" id="signupModal" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-4">
                    <div className="modal-header border-0">
                        <h5 className="modal-title fw-bold">Sign Up / Log In</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="Enter your password" />
                            </div>
                            <p className="text-muted">
                                By signing up, you agree to our <a href="#" className="text-success text-decoration-none">Terms & Conditions and Privacy Policy</a>.
                            </p>
                            <button type="submit" className="btn btn-primary w-100">Sign up</button>
                        </form>
                        <div className="text-center mt-3">
                            <p className="mb-0">Already have an account? <a href="#" className="text-success text-decoration-none">Log in</a></p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        </>
    )
}

export default Nav;