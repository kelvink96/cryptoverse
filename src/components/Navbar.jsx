import React from 'react';
import {Avatar, Typography} from "antd";
import {Link} from "react-router-dom";

import icon from "../images/cryptocurrency.png";

const Navbar = () => {
	return (
		<div className="navbar-container">
			<div className="logo-container">
				<Avatar src={icon} size="large"/>
				<Typography.Title level={2} className="logo">
					<Link to="/">cryptoverse</Link>
				</Typography.Title>
			</div>
		</div>
	);
};

export default Navbar;
