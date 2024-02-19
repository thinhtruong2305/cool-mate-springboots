import { logoCoolmateNavbar } from '~/assets';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header-wrapper')}>
            <div className={cx('header-logo')}>
                <a href="/admin">
                    <img src={logoCoolmateNavbar} alt="logo-coolmate"></img>
                </a>
            </div>
            <div className={cx('header-search')}>
                <h2>search engine</h2>
            </div>
            <div className={cx('header-action')}>
                <div>
                    <h2>Xin chào Admin!</h2>
                </div>
                <div>
                    <h2>Profile</h2>
                </div>
            </div>
        </div>
    );
}

export default Header;
