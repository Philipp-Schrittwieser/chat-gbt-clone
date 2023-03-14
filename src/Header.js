import { Link } from "react-router-dom";

const Header = () => {
   return ( 
      <div className="header">
         
         <div className="header-real">

            <Link to="/" className="logo-und-text">
               <div className="logo"></div>
               <div className="text">Chat-GBT-Clone</div>
            </Link>

            <div className="navigation">
               <Link to="/impressum" className="impressum"><p>Impressum</p></Link>
               <Link to="/datenschutz" className="datenschutz"><p>Datenschutz</p></Link>
            </div>

         </div>
         <div className="header-proxy"></div>
      </div>
    );
}
 
export default Header;