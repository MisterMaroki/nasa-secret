/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { SelectionState } from '../context/SelectionContext'
import Image from 'next/image'
import Draggable from 'react-draggable'

const ImageFile = ({ title, query, src, index }) => {
	const [data, setData] = useState(null)
	const { select, selected } = SelectionState()
	const [expanded, setExpanded] = useState(false)
	console.log(
		'🚀 ~ file: ImageFile.js ~ line 10 ~ ImageFile ~ expanded',
		expanded
	)

	useEffect(() => {
		const URL = query

		!src &&
			fetch(URL)
				.then((res) => res.json())
				.then((data) => {
					setData(data)
				})
	}, [])

	useEffect(() => {
		const handleClick = (e) => {
			setExpanded(false)
		}

		window.addEventListener('click', handleClick)
		return () => window.removeEventListener('click', handleClick)
	}, [])

	const handleClick = (e) => {
		select(e, index)
		setExpanded(index === selected)
	}

	return (
		<>
			<Draggable>
				<div
					className={`${selected === index && 'active'} folder-container`}
					onClick={handleClick}
				>
					<div
						style={{
							padding: '10px',
							borderRadius: '7px',
							backgroundColor:
								selected === index ? 'rgb(57, 56, 55)' : 'transparent',
						}}
					>
						<div className="img-container">
							{data && (
								<Image
									src={data.url}
									layout="fill"
									alt={title}
									draggable="false"
								/>
							)}
							{!data && src && (
								<Image src={src} layout="fill" alt={title} draggable="false" />
							)}
						</div>
					</div>
					<h4>{title}</h4>
				</div>
			</Draggable>
			{expanded && (
				<div
					className={`${
						selected === index && 'active'
					} folder-container expanded
				`}
					// onClick={handleClick}
				>
					<div
						style={{
							padding: '10px',
							borderRadius: '7px',
							backgroundColor:
								selected === index ? 'rgb(57, 56, 55)' : 'transparent',
						}}
					>
						<div className="img-container">
							{data && <img src={data.url} alt={title} />}
							{!data && src && <img src={src} alt={title} />}
						</div>
					</div>
					<h3>{title}</h3>
				</div>
			)}
		</>
	)
}

export default ImageFile
