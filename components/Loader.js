import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { SvgLoader } from './SvgLoader'

export const Loader = () => {
	const router = useRouter()
	const [isLoaderVisible, setIsLoaderVisible] = useState(false)

	React.useEffect(() => {
		const handleRouteChange = (url, { shallow }) => {
			setIsLoaderVisible(true)
		}

		const handleRouteComplete = (url, { shallow }) => {
			setIsLoaderVisible(false)
		}

		// here we subscribe to router change start and complete events
		router.events.on('routeChangeStart', handleRouteChange)
		router.events.on('routeChangeComplete', handleRouteComplete)

		// unsubscribing to router events when component unmounts to prevent memeory leaks
		return () => {
			router.events.off('routeChangeStart', handleRouteChange)
			router.events.off('routeChangeComplete', handleRouteComplete)
		}
	}, [])

	if (isLoaderVisible) {
		return (
			<div
				style={{
					position: 'fixed',
					inset: 0,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<SvgLoader />
			</div>
		)
	} else return null
}
