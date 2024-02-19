import classNames from 'classnames/bind';
import styles from './SlideShow.module.scss';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

const delay = 10000;

function SlideShow({ hasButton, banners }) {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1)),
            delay,
        );
        return () => {
            resetTimeout();
        };
    }, [index]);
    return (
        <div className={cx('slide-show')}>
            <div className={cx('slide-show-slider')} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {Object.keys(banners).map((index) => (
                    <div className={cx('slide')} key={index}>
                        <a href={banners[index].href}>
                            <img src={Object.values(banners[index].imgPath)} alt={banners[index].alt}></img>
                        </a>
                    </div>
                ))}
            </div>
            {hasButton && (
                <div className={cx('slide-show-dots')}>
                    {banners.map((_, idx) => (
                        <div
                            key={idx}
                            className={index === idx ? cx('slide-show-dot', 'active') : cx('slide-show-dot')}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        ></div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SlideShow;
