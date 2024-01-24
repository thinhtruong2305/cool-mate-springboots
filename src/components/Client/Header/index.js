import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import TopBar from '~/components/Client/Header/TopBar';
import NavBar from '~/components/Client/Header/NavBar';
import Row from 'react-bootstrap/Row';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx.bind('header-wrapper')}>
            <Row>
                <TopBar></TopBar>
            </Row>
            <Row>
                <NavBar></NavBar>
            </Row>
        </div>
    );
}

export default Header;
