import React from 'react';
import {Col, Row, Statistic, Typography} from "antd";
import {coins} from "../mocks/coins";
import millify from "millify";
import {Link} from "react-router-dom";

import {CryptoCurrencies, News} from "./index";
import {useGetCryptosQuery} from "../services/cryptoApi";

const {Title} = Typography;

const Homepage = () => {
	const {data, isFetching} = useGetCryptosQuery(10);
	// const data = coins;
	const globalStats = data?.data?.stats;
	console.log('global stats', globalStats);

	// uncomment when using API
	if (isFetching) return "Loading..."

	return (
		<>
			<Title level={2} className="heading">global crypto stats</Title>
			<Row>
				<Col span={12}><Statistic title="total cryptocurrencies" value={globalStats.total}/></Col>
				<Col span={12}><Statistic title="total exchanges" value={millify(globalStats.totalExchanges)}/></Col>
				<Col span={12}><Statistic title="total market cap" value={millify(globalStats.totalMarketCap)}/></Col>
				<Col span={12}><Statistic title="total 24h volume" value={millify(globalStats.total24hVolume)}/></Col>
				<Col span={12}><Statistic title="total markets" value={millify(globalStats.totalMarkets)}/></Col>
			</Row>
			<div className="home-heading-container">
				<Title level={2} className="home-title">top 10 cryptocurrencies in the world</Title>
				<Title level={3} className="show-more"><Link to="/cryptocurrencies">show more</Link></Title>
			</div>
			<CryptoCurrencies simplified={true} />
			<div className="home-heading-container">
				<Title level={2} className="home-title">latest crypto news</Title>
				<Title level={3} className="show-more"><Link to="/news">show more</Link></Title>
			</div>
			<News simplified />
		</>
	);
};

export default Homepage;
