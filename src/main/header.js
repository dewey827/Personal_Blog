import { Link } from "react-router-dom";
import "../css/header.css"


function Footer() {
	return (
		<header>
            <div>
                <ul className="serial">
                    <li><a href="#">홈</a></li>
                    <li><a href="#">게시판</a></li>
                    <li><a href="#">마이페이지</a></li>
                </ul>
            </div> 
        </header>
	);
}
export default Footer;