import React from 'react';
import {Avatar, Menu, Typography} from "antd";
import {Link} from "react-router-dom";
import icon from "../images/cryptocurrency.png";
import {BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined} from "@ant-design/icons";

const Navbar = () => {
	return (
		<div className="navbar-container">
			<div className="logo-container">
				<Avatar src={icon} size="large"/>
				<Typography.Title level={2} className="logo">
					<Link to="/">cryptoverse</Link>
				</Typography.Title>
			</div>
			<Menu theme="dark">
				<Menu.Item icon={<HomeOutlined/>}>
					<Link to="/">home</Link>
				</Menu.Item>
				<Menu.Item icon={<FundOutlined/>}>
					<Link to="/cryptocurrencies">cryptocurrencies</Link>
				</Menu.Item>
				<Menu.Item icon={<MoneyCollectOutlined/>}>
					<Link to="/exchanges">exchanges</Link>
				</Menu.Item>
				<Menu.Item icon={<BulbOutlined/>}>
					<Link to="/news">news</Link>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default Navbar;
