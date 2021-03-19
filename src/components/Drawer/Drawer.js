import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import classes from "./Drawer.module.css";

const Drawer = () => {
    return ( <div className={classes.Layout}>
        <Logo/>
        <Nav/>
    </div> );
}
 
export default Drawer;