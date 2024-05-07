import React from 'react';
import classes from './Name.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dig from '../Digits/Digit/Digit';

const Name = (props) => (
    <>
        <div className={classes.NameContainer}>
            <label className={classes.Label} htmlFor="name">Card Holder</label>
            <TransitionGroup id="name" className={classes.Name}>
                {Array.from(props.name).map((letter, index) => (
                    <CSSTransition
                        key={index}
                        in={false}
                        timeout={350}
                        classNames={{
                            enter: classes["example-enter"],
                            enterActive: classes["example-enter-active"],
                            enterActiveDone: classes["example-enter-active-done"],
                            exit: classes["example-exit"],
                            exitActive: classes["example-exit-active"],
                        }}>
                        <Dig className={classes.Digit} key={index} value={letter} />
                        {/* <p className={classes.Digit}>{letter}</p> */}
                    </CSSTransition>))}
            </TransitionGroup>
        </div>
    </>
)
export default Name;

