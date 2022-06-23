import React from 'react'
import styles from '../../styles/Auth.module.scss'

const Endpoint = ({ endpoint, params }) => {
	return (
		<div className={styles.container}>
			{endpoint}
			<br />
			{params.id}
			<br />
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
