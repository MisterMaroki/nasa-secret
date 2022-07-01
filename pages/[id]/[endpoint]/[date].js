import React from 'react'

const DatePage = ({ params }) => {
	return <div>{JSON.stringify(params)}</div>
}

export default DatePage
export async function getServerSideProps(context) {
	return {
		props: {
			params: context.params,
		}, // will be passed to the page component as props
	}
}
