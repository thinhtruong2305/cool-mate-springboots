import MenuItem from './MenuItem';

function SubMenu({ items = [] }) {
    return (
        <ul>
            {Object.keys(items).map((i) => {
                if (items[i].children !== undefined || items[i].children !== null) {
                    return (
                        <li key={i}>
                            <MenuItem item={items[i]}></MenuItem>
                            <SubMenu items={items[i].children}></SubMenu>
                        </li>
                    );
                } else {
                    return (
                        <li key={i}>
                            <MenuItem item={items[i]}></MenuItem>
                        </li>
                    );
                }
            })}
        </ul>
    );
}

export default SubMenu;
