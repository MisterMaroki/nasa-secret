import React, { useEffect, useState } from 'react'
import styles from '../../styles/Auth.module.scss'
import data from '../../data'
import ImageFile from '../../components/ImageFile'
import Folder from '../../components/Folder'
import { SelectionState } from '../../context/SelectionContext'

const Endpoint = ({ params }) => {
	const [fetchedData, setFetchedData] = useState([])
	const { select, selected } = SelectionState()

	const idData = data.find((x) => x.name === params.id)
	const endpointData = idData?.endpoints?.find(
		(x) => x.name === params.endpoint
	)
	const hasQueries = endpointData.queries ? true : false
	const baseUrl = endpointData?.baseURL
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(baseUrl)
				const data = await res.json()
				setFetchedData(() => (hasQueries ? endpointData.queries : data.photos))
			} catch (err) {
				console.log(err)
			}
		}

		fetchData()
	}, [])

	const thisData = data
		.find((x) => x.name === params.id)
		.endpoints.find((x) => x.name === params.endpoint)

	const thisDataMapImg = fetchedData?.map((item, index) =>
		item.type === 'image' ? (
			<ImageFile
				key={index}
				title={
					item.date || item.camera.full_name.split(' ').slice(0, 2).join(' ')
				}
				query={`${thisData.baseURL}${item.query}`}
				src={item.img_src}
				index={index}
			/>
		) : (
			<Folder
				key={index}
				index={index}
				route={`/${params.id}/${params.endpoint}/${item.date}`}
				title={item.date}
				select={select}
				selected={selected}
			/>
		)
	)
	{
		/* <Folder
			key={name}
			title={name}
			route={`${folder}/${name}`}
			select={select}
			selected={selected}
			index={index}
		/> */
	}
	return <div className={styles.container}>{thisDataMapImg}</div>
}

export default Endpoint

export async function getServerSideProps(context) {
	return {
		props: {
			params: context.params,
		}, // will be passed to the page component as props
	}
}
