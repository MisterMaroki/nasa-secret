/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { SelectionState } from '../context/SelectionContext'
import Image from 'next/image'
import { IconButton } from '@mui/material'
import {
	NavigateBeforeOutlined,
	NavigateNextOutlined,
} from '@mui/icons-material'

const ImageFile = ({ title, query, src, index }) => {
	const [data, setData] = useState(null)
	const { select, selected, setSelected, expanded, setExpanded } =
		SelectionState()

	useEffect(() => {
		const URL = query

		!src &&
			fetch(URL)
				.then((res) => res.json())
				.then((data) => {
					setData(data)
				})
	}, [query, src])

	useEffect(() => {
		const handleClick = (e) => {
			setExpanded(false)
		}

		window.addEventListener('click', handleClick)
		return () => window.removeEventListener('click', handleClick)
	}, [])

	const handleClick = (e) => {
		e.stopPropagation()
		selected === index && setExpanded(index === selected)
	}
	const handleMouseEnter = (e) => {
		e.stopPropagation()
		select(e, index)
	}
	const handleMouseLeave = (e) => {
		e.stopPropagation()
		selected !== index && select(e, null)
	}

	return (
		<>
			<div
				className={`${selected === index && 'active'} folder-container`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
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

			{expanded && index === selected && (
				<>
					<div className="expanded-before" />
					<div className={`active folder-container expanded`}>
						<div
							style={{
								padding: '10px',
								borderRadius: '7px',
								backgroundColor: 'rgb(57, 56, 55)',
							}}
						>
							<div className="img-container">
								{data && <Image src={data.url} alt={title} layout="fill" />}
								{!data && src && <Image src={src} alt={title} layout="fill" />}
							</div>
						</div>
						<div className="expanded-buttons">
							<IconButton
								color="primary"
								onClick={(e) => {
									e.stopPropagation()
									setSelected(selected - 1)
								}}
							>
								<NavigateBeforeOutlined />
							</IconButton>
							<IconButton
								color="primary"
								onClick={(e) => {
									e.stopPropagation()
									setSelected(selected + 1)
								}}
							>
								<NavigateNextOutlined />
							</IconButton>
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default ImageFile
