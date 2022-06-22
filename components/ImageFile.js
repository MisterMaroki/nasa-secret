/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { SelectionState } from '../context/SelectionContext'
import Image from 'next/image'
import { useRouter } from 'next/router'

const ImageFile = ({ title, query }) => {
	const [data, setData] = useState(null)
	const { select, selected } = SelectionState()
	const [expanded, setExpanded] = useState(false)
	const router = useRouter()

	useEffect(() => {
		const URL = query

		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				setData(data)
			})

		// console.log('🚀 ~ file: File.js ~ line 10 ~ useEffect ~ data', data) // Didn't work due to scope
	}, [])

	useEffect(() => {
		const handleClick = (e) => {
			// console.log(e.target.toString())
			setExpanded(false)
			router.push('/nasa/1')
		}

		window.addEventListener('click', handleClick)
		return () => window.removeEventListener('click', handleClick)
	}, [])

	const handleClick = (e) => {
		select(e, title)
		setExpanded(title === selected)
		// selected === title && router.push(route)
	}

	return (
		<>
			<div
				className={`${selected === title && 'active'} folder-container`}
				onClick={handleClick}
				key="5"
			>
				<div
					style={{
						padding: '10px',
						borderRadius: '7px',
						backgroundColor:
							selected === title ? 'rgb(57, 56, 55)' : 'transparent',
					}}
				>
					<div className="img-container">
						{data && (
							<Image
								src={data.url}
								layout="fill"
								alt={title}
								style={{ maxWidth: '10px' }}
							/>
						)}
					</div>
				</div>
				<h3>{title}</h3>
			</div>
			{expanded && (
				<div
					className={`${
						selected === title && 'active'
					} folder-container expanded
				`}
					// onClick={handleClick}
					key="5"
				>
					<div
						style={{
							padding: '10px',
							borderRadius: '7px',
							backgroundColor:
								selected === title ? 'rgb(57, 56, 55)' : 'transparent',
						}}
					>
						<div className="img-container">
							{data && (
								<Image
									src={data.url}
									layout="fill"
									alt={title}
									style={{ maxWidth: '10px' }}
								/>
							)}
						</div>
					</div>
					<h3>{title}</h3>
				</div>
			)}
		</>
	)
}

export default ImageFile
