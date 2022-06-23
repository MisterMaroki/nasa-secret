import React from 'react'
import styles from '../../styles/Auth.module.scss'
import data from '../../data'
import ImageFile from '../../components/ImageFile'

const Endpoint = ({ params }) => {
	const thisData = data.filter((x) => x.name === params.id)[0].endpoints[0]

	const thisDataMapImg = thisData.queries.map((item, index) => (
		<ImageFile
			key={index}
			title={item.date}
			query={`${thisData.baseURL}${item.query}`}
		/>
	))

	return <div className={styles.container}>{thisDataMapImg} </div>
}

export default Endpoint

export async function getServerSideProps(context) {
	return {
		props: { params: context.params }, // will be passed to the page component as props
	}
}
