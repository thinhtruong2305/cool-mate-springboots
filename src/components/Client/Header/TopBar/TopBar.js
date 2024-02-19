import classNames from 'classnames/bind';
import styles from './TopBar.module.scss';
import Menu from '~/components/Menu';
import { logoCoolmateTopbar, logoCM24, logo84Rising, logoCoolXPrint } from '~/assets';
const cx = classNames.bind(styles);
const brands = [
    {
        href: '/',
        imgPath: { logoCoolmateTopbar },
        alt: 'logo-coolmate',
    },
    {
        href: '/',
        imgPath: { logoCM24 },
        alt: 'logo-cm24',
    },
    {
        href: '/',
        imgPath: { logo84Rising },
        alt: 'logo-84-rising',
    },
    {
        href: '/',
        imgPath: { logoCoolXPrint },
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
