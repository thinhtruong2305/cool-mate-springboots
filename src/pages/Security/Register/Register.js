import { Row, Col } from 'react-bootstrap';

function Register({ cx }) {
    return (
        <div className={cx('register-wrapper')}>
            <form>
                <Row>
                    <Col>
                        <input
                            type="text"
                            placeholder="Nhập tên đăng nhập"
                            className={cx('textbox-client')}
                            name="userName"
                            id="userName"
                        />
                    </Col>
                    <Col>
                        <input
                            type="text"
                            placeholder="Nhập tên số điện thoại"
                            className={cx('textbox-client')}
                            name="phoneNumber"
                            id="phoneNumber"
                        />
                    </Col>
                </Row>
                <Row>
                    <input
                        type="text"
                        placeholder="Nhập email"
                        className={cx('textbox-client')}
                        name="email"
                        id="email"
                    />
                </Row>
                <Row>
                    <input
                        type="text"
                        placeholder="Nhập mật khẩu"
                        className={cx('textbox-client')}
                        name="password"
                        id="password"
                    />
                </Row>
                <Row>
                    <input
                        type="text"
                        placeholder="Nhập lại mật khẩu"
                        className={cx('textbox-client')}
                        name="confirmPassword"
                        id="confirmPassword"
                    />
                </Row>
                <Row>
                    <button type="submit" className={cx('btn-login-client')}>
                        Đăng kí
                    </button>
                </Row>
            </form>
        </div>
    );
}

export default Register;
