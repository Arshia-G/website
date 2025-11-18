import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

function Index({ onProductClick }) {
    const products = [
        {
            id: 1,
            name: "Elegant Silk Saree",
            price: 4999,
            image: "/src/assets/demo-image.jpeg",
            category: "Sarees",
            tag: "New",
            description: "Beautiful handwoven silk saree with intricate designs"
        },
        {
            id: 2,
            name: "Designer Lehenga",
            price: 8999,
            image: "/src/assets/logo.png",
            category: "Lehengas",
            tag: "Sale",
            description: "Stunning bridal lehenga with golden embroidery"
        },
        {
            id: 3,
            name: "Cotton Kurti Set",
            price: 1999,
            image: "/src/assets/demo-image.jpeg",
            category: "Kurtis",
            tag: "Hot",
            description: "Comfortable cotton kurti with matching dupatta"
        },
        {
            id: 4,
            name: "Banarasi Silk Saree",
            price: 6999,
            image: "/src/assets/2015-08-20 11.21.46 1.jpg",
            category: "Sarees",
            tag: "New",
            description: "Traditional Banarasi silk with zari work"
        },
        {
            id: 5,
            name: "Anarkali Suit",
            price: 3499,
            image: "/src/assets/demo-image.jpeg",
            category: "Suits",
            tag: "New",
            description: "Flowing Anarkali suit perfect for festive occasions"
        },
        {
            id: 6,
            name: "Embroidered Saree",
            price: 5499,
            image: "/src/assets/logo.png",
            category: "Sarees",
            tag: "Sale",
            description: "Exquisite embroidered saree with pearl work"
        }
    ];

    const heroSlides = [
        {
            id: 1,
            bgClass: 'hero-wrap1',
            title: 'WEAVES & TASSELS',
            subtitle: 'The Queens Contour',
            description: 'Discover timeless elegance in every thread.'
        },
        {
            id: 2,
            bgClass: 'hero-wrap2',
            title: 'BRIDAL COLLECTION',
            subtitle: 'Royal Attire',
            description: 'Make your special day unforgettable.'
        },
        {
            id: 3,
            bgClass: 'hero-wrap3',
            title: 'DESIGNER WEAR',
            subtitle: 'Contemporary Style',
            description: 'Where tradition meets modern fashion.'
        }
    ];

    const addToWishlist = (product) => {
        try {
            const existing = JSON.parse(localStorage.getItem('wishlist')) || [];
            const already = existing.some(p => p.id === product.id);
            if (!already) {
                const updated = [...existing, product];
                localStorage.setItem('wishlist', JSON.stringify(updated));
                window.dispatchEvent(new Event('wishlist-update'));
                alert("Added to Wishlist!");
            }
        } catch (e) {
            console.error('Failed to update wishlist', e);
        }
    };

    const addToCart = (product) => {
        try {
            const existing = JSON.parse(localStorage.getItem('cart')) || [];
            const already = existing.some(p => p.id === product.id);
            if (!already) {
                const updated = [...existing, { ...product, quantity: 1 }];
                localStorage.setItem('cart', JSON.stringify(updated));
                window.dispatchEvent(new Event('cart-update'));
                alert("Added to Cart!");
            }
        } catch (e) {
            console.error('Failed to update cart', e);
        }
    };

    return (
        <>
            {/* HERO SECTION */}
            <div className="hero">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                >
                    {heroSlides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className={`hero-wrap ${slide.bgClass}`}>
                                <div className="hero-content">
                                    <h5 className="text-uppercase mb-3" style={{ letterSpacing: '2px' }}>
                                        {slide.subtitle}
                                    </h5>
                                    <h1 className="mb-4" style={{ fontFamily: 'var(--Newsreader)', fontWeight: 'bold' }}>
                                        {slide.title}
                                    </h1>
                                    <p className="my-3 fs-5">
                                        {slide.description}
                                    </p>
                                    <a href="#shop" className="btn btn-custom2 px-5 py-3 mt-3">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* FEATURED PRODUCTS SECTION */}
            <div className="product-container py-5 my-5" id="shop">
                <div className="container position-relative">
                    <div className="row">
                        <div className="section-title mb-5 product-title text-center">
                            <h2 className="fw-bold display-5" style={{ fontFamily: 'var(--Newsreader)' }}>
                                Featured Collection
                            </h2>
                            <p className="text-muted">Get the look you deserve</p>
                        </div>
                    </div>

                    <div className="position-relative">
                        <div className="product-swiper-prev swiper-button-prev" style={{ color: 'var(--black-color)' }} />
                        <div className="product-swiper-next swiper-button-next" style={{ color: 'var(--black-color)' }} />

                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={30}
                            navigation={{
                                nextEl: '.product-swiper-next',
                                prevEl: '.product-swiper-prev'
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                                1200: { slidesPerView: 4 }
                            }}
                            loop={true}
                            className='mt-4 px-4'
                        >
                            {products.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className="product-item text-center position-relative group">
                                        <div className="product-image w-100 position-relative overflow-hidden rounded">
                                            <span className={`tag badge text-white position-absolute top-0 end-0 m-3 ${product.tag === 'New' ? 'bg-success' : 'bg-danger'}`}>
                                                {product.tag}
                                            </span>

                                            <img 
                                                src={product.image} 
                                                className='img-fluid w-100' 
                                                alt={product.name} 
                                                style={{ height: '350px', objectFit: 'cover', cursor: 'pointer' }}
                                                onClick={() => onProductClick && onProductClick(product)}
                                            />

                                            <div className="product-icons position-absolute start-50 translate-middle-x bottom-0 mb-3 d-flex gap-2" 
                                                 style={{ zIndex: 2 }}>
                                                <button 
                                                    className="btn btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center" 
                                                    style={{ width: '40px', height: '40px' }}
                                                    onClick={() => addToWishlist(product)}
                                                >
                                                    <i className="bi bi-heart"></i>
                                                </button>
                                                <button 
                                                    className="btn btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center" 
                                                    style={{ width: '40px', height: '40px' }}
                                                    onClick={() => addToCart(product)}
                                                >
                                                    <i className="bi bi-bag"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="product-body mt-3">
                                            <p className="text-muted text-uppercase small mb-1">{product.category}</p>
                                            <h5 className="product-name fw-bold mb-1" style={{ fontFamily: 'var(--Newsreader)' }}>
                                                {product.name}
                                            </h5>
                                            <span className="product-price fw-bold fs-5">₹{product.price.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;                   