import React from 'react';
import Table from 'react-bootstrap/Table'

class CumGpa extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cumGpaUnits: '',
            cumGpa: ''

        };
        this.handleUnitesChange = this.handleUnitesChange.bind(this);
        this.handleGPAChange = this.handleGPAChange.bind(this);
    }
    handleUnitesChange(event) {
        let gpaUnit = Number(event.target.value);


        if ((!isNaN(gpaUnit) && gpaUnit > 0)) {
            this.setState({
                cumGpaUnits: gpaUnit

            });
            this.props.handleChangeUnites({ cumGpaUnits: Number(gpaUnit) });

        }
        else if (event.target.value === '') {
            this.setState({
                cumGpaUnits: ''

            });

        }


    }

    handleGPAChange(event) {
        /*  let reg = /^[+-]?\d+(\.\d+)?$/;
          let str = String(event.target.value);
          let GPA = str.match(reg);
          console.log(GPA);
          */

        let GPA = (event.target.value)



        if (!isNaN(GPA)) {
            this.setState({
                cumGpa: GPA

            });
            this.props.handleChangeGPA({ cumGpa: Number(GPA) });

        }
        else {
            this.setState({
                cumGpa: '0'

            });
            // alert("please enter an GPA");
        }



    }




    render() {
        return (

            <Table striped bordered hover size="sm">
                <thead>

                    <h1>Transcript Information</h1>

                </thead>

                <tbody>
                    <tr>
                        <td>Cumulative GPA Units</td>
                        <td>
                            <input value={this.state.cumGpaUnits} onChange={this.handleUnitesChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>Cumulative GPA </td>
                        <td>
                            <input value={this.state.cumGpa} onChange={this.handleGPAChange} />
                        </td>
                    </tr>
                </tbody>

            </Table>



        );
    }



}

export default CumGpa;