import React from "react";
import CityFilter from "./CityFilter";
import StateFilter from "./StateFilter";
import "./filters.css"

class Filters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedProductIndex: 0,
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value:e.target.value,
            selectedProductIndex: e.target.selectedIndex,
        }, () => this.props.filterProducts(this.state.selectedProductIndex))
    }

    render() {
        return (
            <div className="filter-box">
                <h5 className="filter-heading">Filters</h5>
                <hr />
                {
                    this.props.allData.length > 1 ?
                        <div>
                            <select className="form-select mb-4" value={this.state.value} onChange={this.handleChange}>
                                <option value="">Products</option>
                                {
                                    this.props.allData.map(products => {
                                        return (
                                            <option key={Math.random()} value={products.product_name}>{products.product_name}</option>
                                        )
                                    })
                                }
                            </select>

                            <StateFilter states={this.state.selectedProductIndex ===0 ? this.props.allData : this.props.allData[this.state.selectedProductIndex -1].address} 
                            productSelected = {this.state.selectedProductIndex ===0 ? false : true} />

                            <CityFilter cities={this.state.selectedProductIndex ===0 ? this.props.allData : this.props.allData[this.state.selectedProductIndex -1].address} 
                            productSelected = {this.state.selectedProductIndex ===0 ? false : true}/>
                        </div>
                        : <p style={{color: "#fff"}}>Data is not loaded</p>
                }
            </div>
        )
    }
}

export default Filters;