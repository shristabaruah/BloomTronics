import {logo} from "../../assets/index"
import "./footer.css"
const Footer = ()=>{
   return ( <footer>
    <div className="footer">
            <h4 className="text-footer">Made with <i className="fa-solid fa-heart"></i>  by </h4><img className="logo-img" src={logo} alt="logo" />

    </div>
</footer>
   );
}
export {Footer};