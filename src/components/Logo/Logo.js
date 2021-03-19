import classes from "./Logo.module.css";
import logo from "../../image/Logo.png"
const Logo = () => {
    return ( 
        <div className={classes.Logo}>
            <img className={classes.logo}  src={logo} alt ="Logo of the Pizza" />
            <div>Pizza</div>
        </div>

        

    );
}
 
export default Logo;