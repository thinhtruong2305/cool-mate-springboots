import BannerSlider from '~/components/Client/SlideShow';
import { bannerBasicTet, bannerDeal, bannerQuanDaiNam } from '~/assets';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const banners = [
    {
        href: '',
        imgPath: { bannerBasicTet },
        alt: 'logo-banner-basic',
    },
    {
        href: '',
        imgPath: { bannerDeal },
        alt: 'logo-banner-deal',
    },
    {
        href: '',
        imgPath: { bannerQuanDaiNam },
        alt: 'logo-banner-quan-dai-nam',
    },
];

function Home() {
    return (
        <div className={cx('home-wrapper')}>
            <section className={cx('banner-slide')}>
                <BannerSlider banners={banners} />
            </section>
            <h2>Tab sản phẩm mới và sản phẩm bán chạy</h2>
            <h2>banner block category</h2>
            <h2>sản phẩm của category</h2>
            <h2>banner block category</h2>
            <h2>sản phẩm của category</h2>
            <h2>banner block category</h2>
            <h2>sản phẩm của category</h2>
        </div>
    );
}

export default Home;
