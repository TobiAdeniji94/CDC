import React, { Component } from 'react';
import Card from '../Card/Card';
import Form from '../Form/Form';

const defaultCard = ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'];

class CreditCardBuilder extends React.Component {
    state = {
        cardNumber: defaultCard,
        name: "Full Name",
        month: "MM",
        year: "YY",
        cvv: "",
        flip: false,
    }

    cardNumberHandler = (event) => {
        let val = event.target.value;
        if (val.length > 0) {
            val = val.replace(/\s/g, "");
            const number = val.split("");
            const arrLength = number.length;
            for (let i = 0; i < 16 - arrLength; i++) {
                number.push('#');
            };
            this.setState({
                cardNumber: number,
            });
        } else this.setState({ cardNumber: defaultCard});
    }

    nameHandler = (event) => {
        const nameVal = event.target.value;
        (nameVal.length > 0) ? this.setState({ name: nameVal.toUpperCase() }) : this.setState({ name: "Full Name" });
    }

    monthHandler = (event) => {
        const monthVal = event.target.value;
        this.setState({ month: monthVal});
    }

    yearHandler = (event) => {
        const yearVal = event.target.value;
        this.setState({ year: yearVal });
    }

    cvvHandler = (event) => {
        const cvvVal = event.target.value;
        this.setState({ cvv: cvvVal });
    }

    flipCardHandler = (event) => {
        this.setState({ flip: !this.state.flip })
    }

    render() {
        return (
            <>
                <div>
                    <Card
                        number={this.state.cardNumber}
                        name={this.state.name}
                        month={this.state.month}
                        year={this.state.year}
                        cvv={this.state.cvv}
                        flip={this.state.flip} />
                    
                    <Form 
                        changeNumber={this.cardNumberHandler}
                        changeName={this.nameHandler}
                        changeMonth={this.monthHandler}
                        changeYear={this.yearHandler}
                        changeCVV={this.cvvHandler}
                        cardFlip={this.flipCardHandler} />
                </div>
            </>
        );
    }
}

export default CreditCardBuilder;