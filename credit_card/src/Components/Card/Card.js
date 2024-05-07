import React, { useEffect } from 'react';
import classes from './Card.module.css';
import Digits from './Digits/Digits';
import Name from './Name/Name';
import Date from './Date/Date';
import Cvv from './Cvv/Cvv';
import Rfid from '../../assets/rfid.png';

const Card = (props) => {
    const wrapClasses = [classes.WrapCard];
    const cardClasses = [classes.Card];
    const remove = 'remove';

    useEffect(() => {
        wrapClasses.push(classes.WrapCard);
        cardClasses.push(classes.Card);
    });

    if (props.flip) {
        wrapClasses.push(classes.FlipWrap);
        cardClasses.push(classes.Card);
    }

    return (
        <>
            <div className={wrapClasses.join(' ')}>
                <div className={cardClasses.join(' ')}>
                    <div className={classes.FrontCard}>
                        <div className={classes.Digits}>
                            <Digits digits={props.number} clicked={props.digitdClicked} />
                        </div>
                        <div className={classes.Details}>
                            <Name className={classes.CardHolder} name={props.name} />
                            <Date month={props.month} year={props.year} />
                        </div>
                    </div>
                    <div className={classes.BackCard}>
                        <div className={classes.BlackStripe}>
                            <Cvv cvv={props.cvv}/>
                            <img alt='' className={classes.Rfid} src={Rfid}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
