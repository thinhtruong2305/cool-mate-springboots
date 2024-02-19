import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer-wrapper')}>
            <div className={cx('footer-inner')}>
                <h2>footer-sidebar</h2>
                <h2>footer-menu </h2>
                <h2>footer-after</h2>
            </div>
        </div>
    );
}

export default Footer;
