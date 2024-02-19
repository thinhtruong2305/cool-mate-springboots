import { Link } from 'react-router-dom';

function MenuItem({ item }) {
    return (
        <Link to={`${item.id === null || item.id === undefined ? item.href : item.href + '/' + item.id}`}>
            {item.name ? item.name : <img src={Object.values(item.imgPath)} alt={item.alt}></img>}
        </Link>
    );
}

export default MenuItem;
