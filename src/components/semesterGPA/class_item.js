import React, { Component } from "react";
import ClassName from './class_name';
import ClassGrade from './class_grade';
import ClassCredit from './class_credit';






class ClassItem extends Component {

 

 
    render() {
    return (
      <tr>
     
        <ClassName/> 
        <ClassGrade id = {this.props.id} index={this.props.index}   handleChangeGrade={this.props.handleChangeGrade}/>
        <ClassCredit id = {this.props.id} index={this.props.index}   handleChangeCredit={this.props.handleChangeCredit}/>
        
      
      </tr>



    );
  }
}

export default ClassItem;
