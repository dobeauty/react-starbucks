import classes from './SubMenuBtn.module.css';
import {useState} from 'react';

const SubMenuBtn = () => {
    
    const [isHovering,setHovering] = useState();

    const onclickHanlder = () => {
        setHovering(true);
    };

    return (
    
        
        <div className={classes.submenu}>

            <div className={classes.option_1}>
                <a href="/" onclick={onclickHanlder}>COFFEE</a>
                <a href="/">MENU</a>
                <a href="/">STORE</a>
            </div>

            <div className={classes.option_2}>
                <a href="/">REPONSIBILITY</a>
                <a href="/">STARBUCKS REWARDS</a>
                <a href="/">WHAT'S NEW</a>
            </div>
            
        </div>

        

        
    )
}

export default SubMenuBtn;