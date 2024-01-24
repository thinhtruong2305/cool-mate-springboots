import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { useState } from 'react';
import SubMenu from './SubMenu';

const cx = classNames.bind(styles);

function Menu({ items = [] }) {
    const highMenu = items.filter((item) => !item.parentId);
    const subMenu = items.filter((item) => item.parentId);
    const [menu, setMenu] = useState(highMenu.concat(subMenu));

    //3. Trong từng cấp menu, lọc ra những menu con có "parent" trùng với "id" của menu cha
    menu.forEach((menuItem) => {
        menuItem.children = items.filter((item) => item.parentId === menuItem.id);
        if (menuItem.parentId > 0 && (menuItem.children.length === 0 || menuItem.children.length > 0)) {
            const newMenu = menu.filter((item) => item.id !== menuItem.id);
            setMenu(newMenu);
        }
    });
    return (
        <ul className={cx('menu')}>
            {Object.keys(menu).map((index) => {
                return menu[index].parentId !== undefined ? (
                    <li key={Math.round(index + Math.random() * 10000)}>
                        <MenuItem item={menu[index]}></MenuItem>
                        {menu[index].children !== undefined ? (
                            <>
                                {Object.keys(menu[index].children).map((index) => {
                                    return menu[index].children[index] !== undefined ? (
                                        <>
                                            <SubMenu
                                                items={menu[index].children}
                                                subMenu={menu[index].children[index].children}
                                            ></SubMenu>
                                        </>
                                    ) : (
                                        <SubMenu items={menu[index].children}></SubMenu>
                                    );
                                })}
                            </>
                        ) : (
                            <></>
                        )}
                    </li>
                ) : (
                    <li key={Math.round(index + Math.random() * 10000)}>
                        <MenuItem item={menu[index]}></MenuItem>
                    </li>
                );
            })}
        </ul>
    );
}

export default Menu;
