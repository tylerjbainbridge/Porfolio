import React, { PropTypes } from 'react';
// import NavBar from './NavBar';

const AppContainer = (props) => {
    console.log(props);
    return (
        <article className="app-container">
            {/*<section className="nav">
                <NavBar {...props}/>
            </section>*/}
            <section>
                {props.children}
            </section>
        </article>
    );
};

AppContainer.propTypes = {
    children: PropTypes.object.isRequired
};

export default AppContainer;