import React from 'react'
import ImageFile from '../components/ImageFile'
import data from '../data'

const FolderPage = ({ folder }) => {
	const thisData = data.filter((x) => x.name === folder)[0].endpoints

	const thisDataMap = thisData.map(({ endpoint, query }) => (
		<ImageFile key={endpoint} title={endpoint} query={query} />
	))

	console.log('🚀 ~ file: [id].js ~ line 5 ~ FolderPage ~ thisData', thisData)

	return <div>{thisDataMap}</div>
}

export default FolderPage

export async function getServerSideProps(context) {
	return {
		props: { folder: `${context.params.id}` }, // will be passed to the page component as props
	}
}
