import React, { useState } from 'react';

function ProductDetails({ product, onBack }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');

    if (!product) return null;

    return (
        <div className="container py-5" style={{marginTop: '100px'}}>
            <button
                onClick={onBack}
                className="btn btn-dark mb-4 px-4 py-2"
            >
                <i className="bi bi-arrow-left me-2"></i>
                Back to Shop
            </button>

            <div className="row g-5">
                {/* Product Image */}
                <div className="col-12 col-md-6">
                    <div className="position-relative rounded overflow-hidden shadow-lg" style={{height: '600px'}}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-100 h-100 object-fit-cover"
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="col-12 col-md-6">
                    <div className="mb-3">
                        <p className="text-muted text-uppercase small mb-2">{product.category}</p>
                        <h1 className="fw-bold mb-3" style={{fontSize: '2.5rem', fontFamily: 'var(--Newsreader)'}}>
                            {product.name}
                        </h1>
                        <h3 className="fw-bold mb-4" style={{color: '#fedbd9', fontSize: '2rem'}}>
                            ₹{product.price.toLocaleString()}
                        </h3>
                    </div>

                    <p className="text-muted fs-5 mb-4">{product.description}</p>

                    {/* Size Selection */}
                    <div className="mb-4">
                        <label className="form-label fw-bold mb-2">Select Size</label>
                        <select
                            className="form-select form-select-lg"
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            style={{borderColor: '#fedbd9'}}
                        >
                            <option value="">Choose Size</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="Free Size">Free Size</option>
                        </select>
                    </div>

                    {/* Quantity Selection */}
                    <div className="mb-4">
                        <label className="form-label fw-bold mb-2">Quantity</label>
                        <input
                            type="number"
                            className="form-control form-control-lg"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                            style={{borderColor: '#fedbd9', maxWidth: '150px'}}
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex gap-3 mb-5">
                        <button className="btn btn-dark btn-lg flex-grow-1 py-3">
                            <i className="bi bi-bag me-2"></i>
                            Add to Cart
                        </button>
                        <button className="btn btn-outline-dark btn-lg py-3 px-4">
                            <i className="bi bi-heart fs-5"></i>
                        </button>
                    </div>

                    {/* Product Information Accordion */}
                    <div className="accordion accordion-flush" id="productAccordion">
                        <div className="accordion-item border-bottom">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed fw-bold"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#productDetails"
                                >
                                    Product Details
                                </button>
                            </h2>
                            <div
                                id="productDetails"
                                className="accordion-collapse collapse"
                                data-bs-parent="#productAccordion"
                            >
                                <div className="accordion-body text-muted">
                                    Premium quality fabric with traditional craftsmanship. Hand-woven with care and attention to detail. Each piece is unique and crafted by skilled artisans.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border-bottom">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed fw-bold"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#shipping"
                                >
                                    Shipping & Returns
                                </button>
                            </h2>
                            <div
                                id="shipping"
                                className="accordion-collapse collapse"
                                data-bs-parent="#productAccordion"
                            >
                                <div className="accordion-body text-muted">
                                    Free shipping on orders above ₹2000. Standard delivery in 5-7 business days. Easy 7-day return policy. Products must be in original condition with tags attached.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border-bottom">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed fw-bold"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#care"
                                >
                                    Care Instructions
                                </button>
                            </h2>
                            <div
                                id="care"
                                className="accordion-collapse collapse"
                                data-bs-parent="#productAccordion"
                            >
                                <div className="accordion-body text-muted">
                                    Dry clean only. Store in a cool, dry place away from direct sunlight. Avoid contact with perfumes and chemicals. Iron on low heat if needed.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;