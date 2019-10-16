import React, { Component } from 'react';
import { Table, Alert, InputGroup, FormControl } from 'react-bootstrap'


import { blAction } from '../../actions'
import { connect } from 'react-redux';

class BLcalculator extends Component{
    render () {

        const { result } = this.props;

        return (
            <div className="calculator">
                <Alert variant="info">Business Loan Calculator</Alert>
                <div className="calculator_rate">
                    <InputGroup>
                        <InputGroup.Text>
                            Interest Rate
                        </InputGroup.Text>
                        <FormControl type="text" onChange={(e) => this.props.blAction(e) }/>
                    </InputGroup>
                </div>
                <div>
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
                        return <tbody key={id}>
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
        blAction
    }
}

export default connect(null, mapDispatchToProps())(BLcalculator);