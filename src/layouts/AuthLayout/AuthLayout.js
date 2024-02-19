import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { logoLogin } from '~/assets';
import styles from './AuthLayout.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Modal from '~/components/Modal';
import Login from '~/pages/Security/Login';
import Register from '~/pages/Security/Register';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AuthLayout({ isRegister, isForgotPassword }) {
    const [register, setRegister] = useState(isRegister);
    const [forgotPassword, setForgotPassword] = useState(isForgotPassword);

    return forgotPassword ? (
        <div className={cx('login-wrapper')}>
            <input
                type="text"
                placeholder="Nhập số điện thoại"
                className={cx('textbox-client')}
                name="phoneNumber"
                id="phoneNumber"
            />
        </div>
    ) : (
        <div className={cx('login-wrapper')}>
            <Container>
                <Row>
                    <Col className={cx('column')} md={6}>
                        <div className={cx('login-inner')}>
                            <div className={cx('login-heading')}>
                                <div className={cx('title')}>{register ? 'Đăng kí' : 'Đăng nhập'}</div>
                                <div className={cx('subtitle')}>
                                    Đăng nhập để không bỏ lỡ quyền lợi tích luỹ và hoàn tiền
                                    <br />
                                    cho bất kỳ đơn hàng nào.
                                </div>
                                <p>
                                    <b>Đăng nhập hoặc đăng ký (miễn phí)</b>
                                </p>
                            </div>
                            <div className={cx('login-third-party')}>
                                <div className={cx('flex')}>
                                    <button type="button" className={cx('login-provider')}>
                                        <span className={cx('login-provider-icon')}>
                                            <img
                                                src="https://mcdn.coolmate.me/image/September2023/mceclip1_21.png"
                                                alt="logon-goole"
                                            ></img>
                                        </span>
                                    </button>
                                    <button type="button" className={cx('login-provider')}>
                                        <span className={cx('login-provider-icon')}>
                                            <img
                                                src="https://mcdn.coolmate.me/image/September2023/mceclip0_86.png"
                                                alt="logo-facebook"
                                            ></img>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className={cx('login-or-provider')}>Hoặc</div>
                            <div className={cx('form')}>
                                {register ? <Register cx={cx}></Register> : <Login cx={cx}></Login>}
                            </div>
                            <div className={cx('auth-action')}>
                                {register ? (
                                    <Link
                                        to="#"
                                        onClick={() => {
                                            setRegister(false);
                                            setForgotPassword(false);
                                        }}
                                    >
                                        Đăng nhập
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            to="#"
                                            onClick={() => {
                                                setRegister(true);
                                                setForgotPassword(false);
                                            }}
                                        >
                                            Đăng kí tài khoản mới
                                        </Link>
                                        <Link
                                            to="#"
                                            onClick={() => {
                                                setRegister(false);
                                                setForgotPassword(true);
                                            }}
                                        >
                                            Quên mật khẩu
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </Col>
                    <Col className={cx('column')} md={6}>
                        <img src={logoLogin} alt="logo-login"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

function AuthLayoutWithModal({ isShowing, toggle, isRegister, isForgotPassword }) {
    return (
        <Modal cx={cx} isShowing={isShowing} hide={toggle}>
            <AuthLayout isRegister={isRegister} isForgotPassword={isForgotPassword}></AuthLayout>
        </Modal>
    );
}

export { AuthLayout, AuthLayoutWithModal };
