import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { authService } from '~/service/authService';
import { getResponseError } from '~/utils/getResponseError';
import FormFieldError from '~/components/FormFieldError';

function Login({ cx }) {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);
        try {
            const { data } = await authService.login(payload);
            if (data?.token) {
                const token = data?.token;
                authService.setToken(token);
                if (authService.checkRole('ROLE_ADMIN')) {
                    navigate('/admin');
                } else {
                    navigate('/');
                }
            }
        } catch (error) {
            setError(getResponseError(error));
        }
    };

    return (
        <div className={cx('login-wrapper')}>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="rememberMe" id="rememberMe" value={true} />
                <Row>
                    <Row>
                        <input
                            type="text"
                            placeholder="Nhập tên đăng nhập hoặc email"
                            className={cx('textbox-client')}
                            name="userNameOrEmail"
                            id="userNameOrEmail"
                        />
                    </Row>
                    <Row>
                        <FormFieldError message={error?.get('userNameOrEmail')} />
                    </Row>
                </Row>
                <Row>
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        className={cx('textbox-client')}
                        name="password"
                        id="password"
                    />
                    <Row>
                        <FormFieldError message={error?.get('password')} />
                    </Row>
                </Row>
                <Row>
                    <button type="submit" className={cx('btn-login-client')}>
                        Đăng nhập
                    </button>
                </Row>
            </form>
        </div>
    );
}
export default Login;
