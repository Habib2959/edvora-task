import React from "react";

class CityFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <select className="form-select mb-4" value={this.state.value} onChange={this.handleChange}>
                    <option value="">City</option>
                    {
                        !this.props.productSelected ? 
                        this.props.cities.map(products => {
                            return (
                                <option key={Math.random()} value={products.address.city}>{products.address.city}</option>
                            )
                        }) : <option value={this.props.cities.city}>{this.props.cities.city}</option>
                    }
                </select>
            </div>
        )
    }
}

export default CityFilter;