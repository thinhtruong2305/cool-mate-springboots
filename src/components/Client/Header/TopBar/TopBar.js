import classNames from 'classnames/bind';
import styles from './TopBar.module.scss';
import Menu from '~/components/Menu';
const cx = classNames.bind(styles);
const brands = [
    {
        href: '/',
        imgPath: 'https://static.coolmate.me/images/logo-coolmate-v2.svg',
        alt: 'logo-coolmate',
    },
    { href: '/', imgPath: 'https://static.coolmate.me/images/logo-cm24-own-new.svg', alt: 'logo-cm24' },
    {
        href: '/',
        imgPath: 'https://static.coolmate.me/images/logo-84rising-own.svg',
        alt: 'logo-84-rising',
    },
    {
        href: '/',
        imgPath: 'https://static.coolmate.me/images/logo-coolxprint.svg',
        alt: 'logo-coolxprint',
    },
];

const actions = [
    { href: '/', name: 'Tham gia CoolClub' },
    { href: '/', name: 'Blog' },
    { href: '/', name: 'Về CoolMate' },
    { href: '/', name: 'Trung Tâm CSKH' },
];

function TopBar() {
    return (
        <div className={cx('top-bar-wrapper')}>
            <div className={cx('top-bar-inner')}>
                <div className={cx('right-action', 'menu')}>
                    <Menu items={brands}></Menu>
                </div>
                <div className={cx('left-action', 'menu')}>
                    <Menu items={actions}></Menu>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
