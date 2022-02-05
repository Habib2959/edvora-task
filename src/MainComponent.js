import axios from "axios";
import React from "react";
import Filters from "./filter/Filters";
import Products from "./products/Products";
import Spinner from "./Spinner";


class MainCompnent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allData: [],
            brandNames: [],
            filterProduct: [],
            filterProductIndex: 0,
            isLoading: true
        }
        this.filterProducts = this.filterProducts.bind(this)
    }

    filterProducts(filterProductIndex) {
        this.setState({
            filterProductIndex: filterProductIndex
        })
    }
    componentDidMount() {
        axios.get('https://assessment-edvora.herokuapp.com/')
            .then(res => {
                let brandNames = [...new Set(res.data.map(products => products.brand_name))];
                this.setState({
                    isLoading: false,
                    allData: res.data,
                    brandNames: brandNames
                })
            }).catch(err => {
                this.setState({
                    isLoading: false
                }, () => console.log(err.message))
            })
    }
    render() {
        return (
            <>
                {
                    this.state.isLoading ? <Spinner /> :
                    <div style={{ padding: "50px 0px" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-3">
                                    <Filters filterProducts={this.filterProducts} allData={this.state.allData} />
                                </div>
                                <div className="col-lg-10 col-md-9">
                                    <Products
                                        allData={this.state.filterProductIndex < 1 ? this.state.allData : [this.state.allData[this.state.filterProductIndex - 1]]}
                                        brandNames={this.state.filterProductIndex < 1 ? this.state.brandNames : [this.state.allData[this.state.filterProductIndex - 1].brand_name]} />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default MainCompnent;