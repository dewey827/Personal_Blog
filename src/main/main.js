import Router from "../router/router";
import Footer from "./footer";
import Header from "./header";

import "../../css/main.css";

function Main() {
	return (
		<main>
            <Header />
			<div>
				<div className="content">
					<Router />
				</div>
			</div>
            <Footer />
            
		</main>
	);
}
export default Main;