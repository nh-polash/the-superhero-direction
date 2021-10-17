import React from 'react';
import './Total.css';

const Total = (props) => {
    // console.log(props);
    const {addedMember} = props;
    const total = addedMember.reduce((previous, price) => previous + price.balance,0);
    let totals = 0;
    for(const price of addedMember){
        totals = total + price.balance;
    }

    

    return (
        <div>
            <h1>Member Added:{addedMember.length}</h1>
            <h1>Total Balance:{totals } </h1>
        </div>
    );
};

export default Total;