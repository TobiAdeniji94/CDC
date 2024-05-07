import React from 'react';
import classes from './Date.module.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
const Date = (props) => (
    <div className={classes.Expiration}>
        <label className={classes.Label} htmlFor="date">Expires</label>
        <div className={classes.Date} id="date">

            <SwitchTransition >
                <CSSTransition
                    key={props.month}
                    in={false}
                    timeout={200}
                    classNames={{
                        enter: classes["example-enter"],
                        enterActive: classes["example-enter-active"],
                        exit: classes["example-exit"],
                        exitActive: classes["example-exit-active"],
                    }}>
                    <div>{props.month}</div>
                </CSSTransition>
            </SwitchTransition>
                    /
                    <SwitchTransition >
                <CSSTransition
                    key={props.year}
                    in={false}
                    timeout={150}
                    classNames={{
                        enter: classes["example-enter"],
                        enterActive: classes["example-enter-active"],
                        exit: classes["example-exit"],
                        exitActive: classes["example-exit-active"],
                    }}>
                    <div>{props.year}</div>
                </CSSTransition>
            </SwitchTransition>

        </div>
    </div>
);

export default Date;