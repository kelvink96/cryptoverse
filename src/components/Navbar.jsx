import React, {useEffect, useState} from 'react';
import {Avatar, Button, Menu, Typography} from "antd";
import {Link} from "react-router-dom";
import icon from "../images/cryptocurrency.png";
import {BulbOutlined, FundOutlined, HomeOutlined, MenuOutlined, MoneyCollectOutlined} from "@ant-design/icons";

const Navbar = () => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(null);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);


	useEffect(() => {
		if (screenSize < 768) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true)
		}
	}, [screenSize]);

	return (
		<div className="navbar-container">
			<div className="logo-container">
				<Avatar src={icon} size="large"/>
				<Typography.Title level={2} className="logo">
					<Link to="/">cryptoverse</Link>
				</Typography.Title>
				<Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
					<MenuOutlined />
				</Button>
			</div>
			{activeMenu && (
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
			)}
		</div>
	);
};

export default Navbar;
