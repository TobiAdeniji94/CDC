import React from 'react'
import classes from './Layout.module.css'

const Layout = (props) => (
    <main className={classes.Content}>
        {props.children}
        <div>

        </div>
    </main>
);

export default Layout;