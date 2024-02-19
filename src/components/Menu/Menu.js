import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { useState } from 'react';
import SubMenu from './SubMenu';

const cx = classNames.bind(styles);

function Menu({ items = [] }) {
    const [menu, setMenu] = useState(items);

    //3. Trong từng cấp menu, lọc ra những menu con có "parent" trùng với "id" của menu cha
    menu.forEach((menuItem) => {
        menuItem.children = items.filter((item) => item.parentId === menuItem.id);
        if (menuItem.parentId > 0 && menuItem.children !== undefined) {
            const newMenu = menu.filter((item) => item.id !== menuItem.id);
            setMenu(newMenu);
        }
    });
    return (
        <ul className={cx('menu')}>
            {Object.keys(menu).map((i) => {
                return menu[i].parentId !== undefined ? (
                    <li key={Math.round(i + Math.random() * 10000)}>
                        <MenuItem item={menu[i]}></MenuItem>
                        <SubMenu key={i} items={menu[i].children}></SubMenu>
                        {/* {menu[i].children !== undefined ? (
                            <>
                                {Object.keys(menu[i].children).map((j) => {
                                    if (menu[i].id === menu[i].children[j].parentId) {
                                        return <SubMenu key={j} items={menu[i].children}></SubMenu>;
                                    }
                                    return <></>;
                                })}
                            </>
                        ) : (
                            <></>
                        )} */}
                    </li>
                ) : (
                    <li key={Math.round(i + Math.random() * 10000)}>
                        <MenuItem item={menu[i]}></MenuItem>
                    </li>
                );
            })}
        </ul>
    );
}

export default Menu;
