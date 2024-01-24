import classNames from 'classnames/bind';
import Header from '~/components/Client/Header';
import styles from './ClientLayout.module.scss';

const cx = classNames.bind(styles);

function ClientLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className="body">{children}</div>
            <div className="footer"></div>
        </div>
    );
}

export default ClientLayout;
