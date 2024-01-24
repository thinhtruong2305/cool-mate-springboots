import MenuItem from './MenuItem';

function SubMenu({ items = [], subMenu = [] }) {
    return (
        <ul>
            {Object.keys(items).map((index) => {
                return (
                    <li key={Math.round(index + Math.random() * 10000)}>
                        <MenuItem item={items[index]}></MenuItem>
                        {subMenu.length > 0 ? <SubMenu items={subMenu} subMenu={subMenu.children}></SubMenu> : <></>}
                    </li>
                );
            })}
        </ul>
    );
}

export default SubMenu;
