import React, { Component } from 'react';


class ClassCredit extends Component{

    constructor(props){
        super(props);

        this.state = {
            courseCredit : ''
        }

        this.handleCreditChange = this.handleCreditChange.bind(this);
    }

    handleCreditChange(event){
        this.setState({
            courseCredit: (event.target.value)
        });
        this.props.handleChangeCredit(this.props.index,{courseCredit: Number(event.target.value)})
    }


    render() {
        return (
            <td>
          <select className="custom-select" value={this.state.courseCredit} onChange={this.handleCreditChange}
          >
              <option value="" ></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4" >4 </option>
            <option value="5">5</option>
          </select>
        </td>
        );
    }

}

export default ClassCredit;