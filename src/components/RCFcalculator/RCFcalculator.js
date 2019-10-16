import React, { Component } from 'react';
import { Table, Alert, InputGroup, FormControl, Badge } from 'react-bootstrap';

import { rcfAction } from '../../actions';
import { connect } from 'react-redux';

class RCFcalculator extends Component {

    render () {

        const { result } = this.props;

        return(
            <div className="calculator">
                <Alert variant="info">
                    Revolving Credit Facility
                    <Badge className="float-right" pill variant="success">
                        10% Deposit
                    </Badge>
                </Alert>

                <div className="calculator_rate">
                    <InputGroup>
                        <InputGroup.Text>
                            Interest Rate
                        </InputGroup.Text>
                        <FormControl type="text"  onChange={(e) => this.props.rcfAction(e) }/>
                    </InputGroup>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Repayment date</th>
                        <th>Principal</th>
                        <th>Interest</th>
                        <th>Total repayment</th>
                    </tr>
                </thead>
                {
                    result.map(({ id, date, principal, interest, total }) => {
                        return <tbody id={id}>
                            <tr>
                                <td>{ date }</td>
                                <td>{ principal }</td>
                                <td>{ interest }</td>
                                <td>{ total }</td>
                            </tr>
                            </tbody> 
                        })
                }
                </Table>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = () => {
    return {
        rcfAction
    }
}

export default connect(null, mapDispatchToProps())(RCFcalculator);