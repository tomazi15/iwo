import React, { Component } from 'react';
import './CommonParameters.scss';
import {InputGroup, FormControl} from 'react-bootstrap';

import { amountAction, durationAction } from '../../actions';
import { connect } from 'react-redux';

class CommonParameters extends Component {

    render() {
        return (
            <div className="parameters">
                <InputGroup>
                    <InputGroup.Text>
                        Amount Requested
                    </InputGroup.Text>
                    <FormControl type="text" onChange={(e) => this.props.amountAction(e)}/>
                    <InputGroup.Text>
                        Duration
                    </InputGroup.Text>
                    <FormControl type="text" onChange={(e) => this.props.durationAction(e) }/>
                </InputGroup>
            </div>
        )
    }
}

const mapDispatchToProps = () => {
    return {
        amountAction,
        durationAction
    }
}

export default connect(null, mapDispatchToProps())(CommonParameters);