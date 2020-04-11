import React , { useState , useEffect } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { API } from '../../../../api/Call_API';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { Func } from '../../../../common/common';
import './Menu.scss';


// 메뉴리스트값들은 추후 정적인 값으로 변경 예정

const useStyles = makeStyles({
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      }
});

const menuList = (menuItems) => {
    return <div>
                <List>
                    {menuItems.sort(Func.Compare('id')).map((c) => (
                        <Link to={`/ctg/${c.routerName}`} key={c.id}>
                            <ListItem button key={c.name}>
                                <ListItemText primary={c.name} />
                            </ListItem>
                         </Link>
                    ))}
                </List>
            </div>
}

const Menu = () => {
    const classes = useStyles();
    const [left , setLeft] = useState(false);
    const [menuItems , setMenuItems] = useState([]);

    useEffect(() => {
        _GetMenuItems();
    } , []);

    const _GetMenuItems = () => {
        API.GET_Categories()
        .then(res => {
            setMenuItems(res.data.data)
        }).catch(err => {
            console.log(err);
        })    
    }

    const openSide = side => (
        <div
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
          className={clsx(classes.list , {
            [classes.fullList]: side === 'top' || side === 'bottom',
          })}
        >
          {menuList(menuItems)}
        </div>
      );

    const toggleDrawer = (side , open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
          setLeft(open);
    }

    return (
        <div className="menu__btn">
            <IconButton 
                color='inherit' 
                aria-label="open drawer"
                onClick={toggleDrawer('left', true)}
            >
                <MenuIcon />
            </IconButton>

            <Drawer open={left} onClose={toggleDrawer('left', false)}>
                {openSide('left')}
            </Drawer>
        </div>
    )
}

export default Menu;