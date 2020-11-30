import React, { Component } from "react";
import ClassName from '.././semesterGPA/class_name';
import ClassGrade from '.././semesterGPA/class_grade';
import ClassCredit from '.././semesterGPA/class_credit';
import IsRepeat from './class_isRepeat';
import PrevGrade from './class_grade_repeat';


class CumItem extends Component {




  render() {
    return (
      <tr>

        <ClassName />
        <ClassGrade id={this.props.id} index={this.props.index} handleChangeGrade={this.props.handleChangeGrade} />
        <ClassCredit id={this.props.id} index={this.props.index} handleChangeCredit={this.props.handleChangeCredit} />
        <td>
          <IsRepeat id={this.props.id} index={this.props.index} handleChangeRepeat={this.props.handleChangeRepeat} />
        </td>
        <PrevGrade id={this.props.id} index={this.props.index} handlePrevChangeGrade={this.props.handlePrevChangeGrade} isVisable={this.props.isVisable} />


      </tr>



    );
  }
}

export default CumItem;