import React, {useEffect, useState} from 'react';
import {coins} from "../mocks/coins";
import {Card, Col, Input, Row} from "antd";
import {Link} from "react-router-dom";
import millify from "millify";

import {useGetCryptosQuery} from "../services/cryptoApi";

const CryptoCurrencies = ({simplified}) => {
	const count = simplified ? 10 : 100;
	const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
	// const cryptosList = coins;
	const [cryptos, setCryptos] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	console.log('cryptos', cryptos);
	useEffect(() => {
		console.log(searchTerm);
		const filteredData = cryptosList?.data?.coins.filter(coin => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
		console.log(filteredData);

		setCryptos(filteredData);
	}, [cryptosList, searchTerm])

	// uncomment when using API
	if (isFetching) return "Loading..."

	return (<>
			{!simplified && (<div className="search-crypto">
				<Input placeholder="search cryptocurrency" onChange={(evt) => setSearchTerm(evt.target.value)}/>
			</div>)}
			<Row gutter={[32, 32]} className="crypto-card-container">
				{cryptos?.map((currency, index) => (<Col xs={24} sm={12} lg={6} key={currency.uuid} className="crypto-card">
						<Link to={`/crypto/${currency.uuid}`}>
							<Card title={`${++index}. ${currency.name}`}
										extra={<img className="crypto-image" src={currency.iconUrl} alt={`${currency.name} logo`}/>}
										hoverable
							>
								<p>Price: {millify(currency.price)}</p>
								<p>Market cap: {millify(currency.marketCap)}</p>
								<p>Daily change: {millify(currency.change)}</p>
							</Card>
						</Link>
					</Col>))}
			</Row>
		</>);
};

export default CryptoCurrencies;
