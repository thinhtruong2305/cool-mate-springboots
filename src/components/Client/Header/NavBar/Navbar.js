import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';
import Menu from '~/components/Menu';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cx = classNames.bind(styles);

const menu = [
    { href: '/Sale', name: 'Sale' },
    { href: '/Shop', name: 'Sản phẩm' },
    { href: '/', name: 'Áo' },
    { href: '/', name: 'Quần' },
    { href: '/', name: 'Đồ thể thap' },
    { href: '/', name: 'Mặc hằng ngày' },
    { href: '/', name: 'Đồ lót' },
    { href: '/', name: 'Nước hoa' },
];

function NavBar() {
    return (
        <div className={cx('nav-bar-wrapper')}>
            <Row className={cx('nav-bar-inner')}>
                <Col md={7} className={cx('nav-bar-inner-right')}>
                    <Col md={3} className={cx('nav-bar-logo')}>
                        <a href="/">
                            <img
                                src="https://static.coolmate.me/images/logo-coolmate-new.svg?v=1"
                                alt="logo-coolmate"
                            ></img>
                        </a>
                    </Col>
                    <Col md={9} className={cx('nav-bar-menu')}>
                        <Menu items={menu}></Menu>
                    </Col>
                </Col>
                <Col md={5} className={cx('nav-bar-inner-left')}>
                    <Col md={8} className={cx('search')}>
                        <form>
                            <input type="text" placeholder="Tìm kiếm sản phẩm"></input>
                            <button type="submit"></button>
                        </form>
                    </Col>
                    <Col md={2}>
                        <span>a</span>
                    </Col>
                    <Col md={2}>
                        <span>a</span>
                    </Col>
                </Col>
            </Row>
        </div>
    );
}

export default NavBar;
