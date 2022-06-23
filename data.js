/* eslint-disable import/no-anonymous-default-export */
export default [
	{
		name: 'nasa',
		endpoints: [
			{
				name: 'apod',
				baseURL:
					'https://api.nasa.gov/planetary/apod?api_key=hUp4PKIlIDJ2LQeNvl0v6fGaNQzqI389m9rVBHuf',
				queries: [
					{ date: '2022-05-22', query: '&date=2022-05-22', type: 'image' },
					{ date: '2022-05-23', query: '&date=2022-05-23', type: 'image' },
					{ date: '2022-05-24', query: '&date=2022-05-24', type: 'image' },
					{ date: '2022-05-25', query: '&date=2022-05-25', type: 'image' },
					{ date: '2022-05-26', query: '&date=2022-05-26', type: 'image' },
					{ date: '2022-05-27', query: '&date=2022-05-27', type: 'image' },
					{ date: '2022-05-28', query: '&date=2022-05-28', type: 'image' },
					{ date: '2022-05-30', query: '&date=2022-05-30', type: 'image' },
					{ date: '2022-05-31', query: '&date=2022-05-31', type: 'image' },
					{ date: '2022-06-01', query: '&date=2022-06-01', type: 'image' },
					{ date: '2022-06-02', query: '&date=2022-06-02', type: 'image' },
					{ date: '2022-06-03', query: '&date=2022-06-03', type: 'image' },
					{ date: '2022-06-04', query: '&date=2022-06-04', type: 'image' },
					{ date: '2022-06-05', query: '&date=2022-06-05', type: 'image' },
					{ date: '2022-06-06', query: '&date=2022-06-06', type: 'image' },
					{ date: '2022-06-07', query: '&date=2022-06-07', type: 'image' },
					{ date: '2022-06-08', query: '&date=2022-06-08', type: 'image' },
					{ date: '2022-06-09', query: '&date=2022-06-09', type: 'image' },
					{ date: '2022-06-10', query: '&date=2022-06-10', type: 'image' },
					{ date: '2022-06-11', query: '&date=2022-06-11', type: 'image' },
					{ date: '2022-06-12', query: '&date=2022-06-12', type: 'image' },
				],
			},
			{
				name: 'mars',
				baseURL:
					'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=hUp4PKIlIDJ2LQeNvl0v6fGaNQzqI389m9rVBHuf',
			},
		],
	},
]

//check if the queries array exists in the endpoint object
// if it does, loop through the queries array and create a new array of objects with the date and query
// if it doesn't, just create a new array of objects with the baseUrl data
