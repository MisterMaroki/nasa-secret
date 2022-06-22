import React from 'react'

const Endpoint = ({ endpoint }) => {
	return <div>{endpoint}</div>
}

export default Endpoint

export async function getServerSideProps(context) {
	return {
		props: { endpoint: context.resolvedUrl }, // will be passed to the page component as props
	}
}
