/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'

const File = ({ title, query, selected, handleClick }) => {
	const [data, setData] = useState(null)
	console.log('🚀 ~ file: File.js ~ line 6 ~ File ~ data', data)

	useEffect(() => {
		const URL = query

		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				setData(data)
			})

		// console.log('🚀 ~ file: File.js ~ line 10 ~ useEffect ~ data', data) // Didn't work due to scope
	}, [])

	// console.log(data)

	return (
		<div
			className={`${selected === title && 'active'} folder-container`}
			onClick={handleClick}
			key="5"
		>
			{data && <img src={data.url} alt={title} />}
			<h3>{title}</h3>
		</div>
	)
}

export default File

{
	/* <div
className={`${selected === title && 'active'} folder-container`}
onClick={handleClick}
key="5"
>
<div
    style={{
        padding: '4px 7px',
        borderRadius: '7px',
        backgroundColor:
            selected === title ? 'rgb(57, 56, 55)' : 'transparent',
    }}
>
    <div className="img-container">
        <Image
            src={'/folder.svg'}
            layout="fill"
            alt="folder"
            style={{ maxWidth: '10px' }}
        />
    </div>
</div>
<h3>{title}</h3>
</div> */
}
