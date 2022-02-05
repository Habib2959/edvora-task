import React from "react";

class StateFilter extends React.Component {
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
                    <option value="">State</option>
                    {
                        !this.props.productSelected ? 
                        this.props.states.map(products => {
                            return (
                                <option key={Math.random()} value={products.address.state}>{products.address.state}</option>
                            )
                        }) : <option value={this.props.states.state}>{this.props.states.state}</option>
                    }
                </select>
            </div>
        )
    }
}

export default StateFilter;