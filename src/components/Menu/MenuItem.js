function MenuItem({ item }) {
    return <a href={item.href}>{item.name ? item.name : <img src={item.imgPath} alt={item.alt}></img>}</a>;
}

export default MenuItem;
