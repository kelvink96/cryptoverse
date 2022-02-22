import React from 'react';
import {Row, Table} from "antd";

import {useGetExchangesMarketsQuery} from "../services/cryptoApi";

const Exchanges = () => {
	const {data: exchangeMarkets} = useGetExchangesMarketsQuery();

	if (!exchangeMarkets?.exchanges) return "Loading..."

	const columns = [
		{title: 'exchanges', dataIndex: '', key: 'x', render: (obj) => (<p>{obj}</p>)},
		{title: '24hVolume', dataIndex: '24hVolume', key: '24hVolume'},
		{title: 'markets', dataIndex: 'marketShare', key: 'marketShare'},
		{title: 'no. of markets', dataIndex: 'numberOfMarkets', key: 'numberOfMarkets'}
	];

	return (
		<Row>
			<Table columns={columns} dataSource={exchangeMarkets.exchanges}/>
		</Row>
	);
};

export default Exchanges;
