import React from "react";
import Slider from "react-slick";
import './products.css'


const Products = props => {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container-fluid">
            <h1 className="main-title">Edvora</h1>
            <h2 className="product-main-title">Products</h2>
            <div className="row">
                {
                    props.brandNames.map(brands => {
                        return (
                            <div className="col-12" key={Math.random()}>
                                <h2 className="brand-title">{brands}</h2>
                                <Slider {...settings}>
                                    {
                                        props.allData.map(products => {
                                            if (products.brand_name === brands) {
                                                return (
                                                    <div key={Math.random()}>
                                                        <div className="custom-card">
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <img src={products.image} alt="image" className="profile-image" />
                                                                </div>
                                                                <div className="col-6">
                                                                    <p className="product_name details">{products.product_name}</p>
                                                                    <p className="product_brand details">{products.brand_name}</p>
                                                                    <p className="product_price details"><span>$</span>{products.price}</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <p className="product_brand details">{`${products.address.state} ,  ${products.address.city}`}</p>
                                                                </div>
                                                                <div className="col-6">
                                                                    <p className="product_brand details">Date: {new Date(products.date).toLocaleDateString()}</p>
                                                                </div>
                                                            </div>
                                                            <p className="product_description details">{products.discription}</p>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </Slider>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products;