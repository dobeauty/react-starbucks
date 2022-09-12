import classes from './Header.module.css';
import SubMenuBtn from './SubMenuBtn.js';
import SubMenu from './SubMenu/SubMenu.js';
const Header = () => {
    return (
        <div className={classes.header}>
        <img src={process.env.PUBLIC_URL + 'favicon.ico'}/>
        <SubMenuBtn/>
        <SubMenu/>
        </div>
    );   
};

export default Header;