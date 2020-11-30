import React from 'react';

class ClassGrade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            courseGrade: ''

        };
        this.handleGradeChange = this.handleGradeChange.bind(this);
        }

        handleGradeChange (event){

            this.setState({
                courseGrade: (event.target.value)
            });
            this.props.handleChangeGrade(this.props.index,{courseGrade:Number(event.target.value)})

        } 



    render() {
        return(
            <td>
             <select className="custom-select" value={this.state.courseGrade} onChange={this.handleGradeChange} 
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
export default ClassGrade;