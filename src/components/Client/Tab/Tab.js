import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Tab.module.scss';

const cx = classNames.bind(styles);

const Tab = ({ tabs, contents }) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getActiveClass = (index, className) => (toggleState === index ? className : '');

    return (
        <div className="tab-wrapper">
            {Object.keys(tabs).map((i) => {
                return (
                    <div className="tab-inner">
                        <ul className="tab-list">
                            <li className={`tabs ${getActiveClass(1, 'active-tabs')}`} onClick={() => toggleTab(1)}>
                                {tabs[i].name}
                            </li>
                        </ul>
                        <div className="tab-content">
                            {Object.keys(contents).map((j) => {
                                return (
                                    <div className="tab-content-inner">
                                        <div className={`content ${getActiveClass(1, 'active-content')}`}>
                                            <h2>Lorem</h2>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default Tab;
