import React, {useState} from 'react';
import {useGetCryptoNewsQuery} from "../services/cryptoNewsApi";
import {Avatar, Card, Col, Row, Select, Typography} from "antd";
import {news} from "../mocks/news";
import moment from "moment";
import {useGetCryptosQuery} from "../services/cryptoApi";

const {Title, Text} = Typography;
const {Option} = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({simplified}) => {
	const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
	const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory, count: simplified ? 6 : 12});
	const {data} = useGetCryptosQuery(100);
	// const cryptoNews = news;

	console.log(cryptoNews);
	if (!cryptoNews?.value) return "Loading..."

	return (
		<Row gutter={[24, 24]}>
			{!simplified && (
				<Col span={24}>
					<Select showSearch className="select-news" placeholder="select a crypto" optionFilterProp="children"
									onChange={(value) => setNewsCategory(value)}
									filterOption={(input, option) => option.children.toLowerCase().indexOf() >= 0}>
						<Option value="Cryptocurrency">Cryptocurrency</Option>
						{data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
					</Select>
				</Col>
			)}
			{cryptoNews.value.map((news, index) => (
				<Col xs={24} sm={12} lg={8} key={index}>
					<Card hoverable>
						<a href={news.url} target="_blank" rel="noreferrer">
							<div className="news-image-container">
								<Title className="news-title" level={4}>{news.name}</Title>
								<img src={news?.image?.thumbnail?.content || demoImage} alt="news"
										 style={{maxWidth: "200px", maxHeight: "100px"}}/>
							</div>
							<p>{news.description > 100 ? `${news.description.substring(0, 100)}` : news.description}</p>
							<div className="provider-container">
								<div>
									<Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt=""/>
									<Text className="provider-name">{news.provider[0]?.name}</Text>
								</div>
								<Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
							</div>
						</a>
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default News;
