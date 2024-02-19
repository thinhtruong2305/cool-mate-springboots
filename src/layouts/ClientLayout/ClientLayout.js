import classNames from 'classnames/bind';
import Header from '~/components/Client/Header';
import Footer from '~/components/Client/Footer';
import styles from './ClientLayout.module.scss';

const cx = classNames.bind(styles);

function ClientLayout({ children }) {
    return (
        <div className={cx('client-wrapper')}>
            <Header />
            <div className="body">{children}</div>
            <Footer />
        </div>
    );
}

export default ClientLayout;
