import React from 'react'

const Endpoint = ({ endpoint, params }) => {
	return (
		<div>
			{endpoint}
			{params.id}
			{params.endpoint}
		</div>
	)
}

export default Endpoint

export async function getServerSideProps(context) {
	return {
		props: { endpoint: context.resolvedUrl, params: context.params }, // will be passed to the page component as props
	}
}
