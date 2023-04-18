import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AllBeers = () => {
	const [allBeers, setAllBeers] = useState([]);

	useEffect(() => {
		axios
			.get(`https://ih-beers-api2.herokuapp.com/beers`)
			.then((res) => {
				setAllBeers(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div className=''>
			<Header />

			{allBeers.map((beer) => {
				return (
					<div className='container-fluid d-flex justify-content-around'>
						<div className='beers-image d-flex justify-content-center align-items-center p-2'>
							<img src={beer.image_url} alt='a beer' />
						</div>

						<div className='d-flex flex-column p-4 justify-content-center align-items-left'>
							<h3 className='my-0 mb-2'>{beer.name}</h3>
							<p className='fs-5 mt-0 mb-1 tagline'>{beer.tagline}</p>
							<p className='small-script'>
								<strong>Created by:</strong> {beer.contributed_by}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default AllBeers;
