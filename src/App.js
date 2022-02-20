import React from "react";
import "./App.css";
import {Routes, Route, Link} from "react-router-dom";

import {Layout, Space, Typography} from "antd";

import {Navbar, Exchanges, CryptoCurrencies, CryptoDetails, Homepage, News} from "./components";

function App() {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar/>
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<Routes>
							<Route index path="/" element={<Homepage/>}/>
							<Route exact path="/exchanges" element={<Exchanges/>}/>
							<Route exact path="/cryptocurrencies" element={<CryptoCurrencies/>}/>
							<Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
							<Route path="/news" element={<News/>}/>
						</Routes>
					</div>
				</Layout>
				<div className="footer">
					<Typography.Title level={5} style={{color: "white", textAlign: "center"}}>
						cryptoverse <br/> all rights reserved
					</Typography.Title>
					<Space>
						<Link to="/">home</Link>
						<Link to="/exchanges">exchanges</Link>
						<Link to="/news">news</Link>
					</Space>
				</div>
			</div>
		</div>
	);
}

export default App;
