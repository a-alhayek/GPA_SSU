import React from 'react';


class IsRepeat extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            isRepeat: false

        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {

        this.setState({
            isRepeat: event.target.checked

        });
        this.props.handleChangeRepeat(this.props.index, { isRepeat: event.target.checked })



    }


    render() {
        return (
            <input type="checkbox" checked={this.state.isRepeat} onChange={this.handleInputChange} />
        );
    }


}

export default IsRepeat;