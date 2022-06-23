import React, { useState } from 'react'
import styles from '../../styles/Auth.module.scss'
import data from '../../data'
import ImageFile from '../../components/ImageFile'

const Endpoint = ({ params, fetchedData }) => {
	const thisData = data
		.find((x) => x.name === params.id)
		.endpoints.find((x) => x.name === params.endpoint)

	const thisDataMapImg = fetchedData.map((item, index) => (
		<ImageFile
			key={index}
			title={
				item.date || item.camera.full_name.split(' ').slice(0, 2).join(' ')
			}
			query={`${thisData.baseURL}${item.query}`}
			src={item.img_src}
			index={index}
		/>
	))

	return <div className={styles.container}>{thisDataMapImg} </div>
}

export default Endpoint

export async function getServerSideProps(context) {
	const idData = data.find((x) => x.name === context.params.id)
	const endpointData = idData?.endpoints?.find(
		(x) => x.name === context.params.endpoint
	)
	const hasQueries = endpointData.queries ? true : false
	const baseUrl = endpointData?.baseURL

	let photoArr = []
	const fetchData = async () => {
		const res = await fetch(baseUrl)
		const data = await res.json()
		photoArr = data.photos
		return data.photos
	}
	console.log(photoArr)
	// !hasQueries && fetchData()
	return {
		props: {
			params: context.params,
			fetchedData: hasQueries
				? endpointData.queries
				: (await fetchData()) || [],
		}, // will be passed to the page component as props
	}
}
