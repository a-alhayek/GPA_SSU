import React from 'react';


class ClassName extends React.Component{
    constructor(props){
        super(props);

        this.state = { 
            courseName: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            courseName: event.target.value

        });
    }



    render() {
        return (
            <td>
                <input value = {this.state.courseName} onChange={this.handleChange}></input>
            </td>

        );
    }


}
export default ClassName;