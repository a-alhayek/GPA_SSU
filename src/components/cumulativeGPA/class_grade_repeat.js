import React from 'react';

class PrevGrade extends React.Component {




    constructor(props) {
        super(props);
        this.state = {

            prevGrade: ''

        };
        this.handleGradeChange = this.handleGradeChange.bind(this);
    }

    handleGradeChange(event) {


        this.setState({
            prevGrade: (event.target.value)
        });
        this.props.handlePrevChangeGrade(this.props.index, { prevGrade: Number(event.target.value) })

    }



    render() {
        return (
            <td>
                <select className="custom-select" value={this.state.prevGrade} onChange={this.handleGradeChange} disabled={!this.props.isVisable}
                >
                    <option value="" ></option>
                    <option value="4.00" >A</option>

                    <option value="3.70">A-</option>
                    <option value="3.30">B+</option>
                    <option value="3.00">B</option>
                    <option value="2.70">B-</option>
                    <option value="2.30">C+</option>
                    <option value="2.00">C</option>
                    <option value="1.70">C-</option>
                    <option value="1.30">D+</option>
                    <option value="1.00">D</option>
                    <option value="0.70">D-</option>
                    <option value="0.00">F</option>
                </select>
            </td>


        );
    }
}

export default PrevGrade;