import React, { Component } from 'react';
import { connect } from 'react-redux';


import './LoanCalculator.scss';
import { Container, Row, Col } from 'react-bootstrap';

import CommonParameters from '../components/CommonPrameters/CommonParameters';
import BLcalculator from '../components/BLcalculator/BLcalculator'
import RCFcalculator from '../components/RCFcalculator/RCFcalculator';

export class LoanCalculator extends Component {
    
    render() {

        const { amount, duration, bl_rate, rcf_rate } = this.props;

        const BLcalculateLoan = () => {
            let result = [];
            let loan = amount;
            let principal = loan / duration;

            for (let i = 0; i < duration; i++) {
                
                let interest = loan / 100 * bl_rate;
                let total = principal + interest;

                loan = loanReminding(loan, principal);

                result.push(
                    {
                        id: i,
                        date: combineDate(i),
                        principal: principal,
                        interest: interest,
                        total: total
                    }    
                );
            } 
            
            return result
        }

        const RCFcalculateLoan = () => {
            let result = [];
            let loan = amount;
            let upfront = amount / 100 * 10;
            let principal = loan / duration;

            for (let i = 0; i < duration; i++) {
                
                let interest;
                i === 0 ? interest = (loan / 100 * rcf_rate) + upfront : interest = loan / 100 * rcf_rate;
                let total = principal + interest;

                loan = loanReminding(loan, principal);

                result.push(
                    {
                        id: i,
                        date: combineDate(i),
                        principal: principal,
                        interest: interest,
                        total: total
                    }    
                );
            } 
            
            return result
        }

        const loanReminding = (loan, principal) => {
            return loan - principal;
        }

        const combineDate = (increment) => {
            let date = new Date();
            let dateDay = date.getDate();
            let dateMonth = date.getMonth() + increment;
            let dateYear = date.getFullYear();

            return `${dateDay}-${dateMonth}-${dateYear}`
        }
        
        return (        
            <div className="loan-calculator">
                <Container>
                    <Row>
                        <Col className="loan-title">
                            <h2>Loan Calculator</h2>          
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        
                            <CommonParameters />          
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <RCFcalculator result={ RCFcalculateLoan() }/>         
                        </Col>
                        <Col>
                            <BLcalculator result={ BLcalculateLoan() }/>
                        </Col>
                    </Row>
                </Container>
            </div>
          );    
    }
}

const mapStateToProps = (state) => {
    return {
        amount: state.amount,
        bl_rate: state.bl_rate,
        rcf_rate: state.rcf_rate,
        duration: state.duration,
    }
}


export default connect(mapStateToProps)(LoanCalculator);
