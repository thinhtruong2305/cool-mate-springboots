import styles from './FormFieldError.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FormFieldError({ message }) {
    if (message === undefined || message === null) {
        return <></>;
    }

    return (
        <ul className={cx('errors')}>
            {Array.isArray(message) ? (
                <>
                    {Object.keys(message).map((index) => (
                        <li key={index} className={cx('error-message')}>
                            {message[index].includes('\n') ? (
                                message[index].split('\n').map((str, index) => <p key={index}>{str}</p>)
                            ) : (
                                <p>{message[index]}</p>
                            )}
                        </li>
                    ))}
                </>
            ) : (
                <li className={cx('error-message')}>
                    <p>{message}</p>
                </li>
            )}
        </ul>
    );
}

export default FormFieldError;
