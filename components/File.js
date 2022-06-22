import { useEffect } from 'react'

const File = ({ title, query }) => {
	useEffect(() => {
		const URL = query

		fetch(URL)
			.then((res) => res.json())
			.then((data) => console.log(data))

		// console.log('🚀 ~ file: File.js ~ line 10 ~ useEffect ~ data', data) // Didn't work due to scope
	}, [])

	return <div>{title}</div>
}

export default File
