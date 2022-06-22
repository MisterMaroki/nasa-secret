import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import AuthModal from '../components/auth/authModal'
import { AuthState } from '../context/AuthContext'
import styles from '../styles/Home.module.scss'

const Auth = () => {
	const router = useRouter()
	const { user } = AuthState()

	useEffect(() => {
		if (user) {
			router.push('/')
		}
	}, [user])

	return (
		<div className={[styles.container, styles.main].join(' ')}>
			<AuthModal />
		</div>
	)
}

export default Auth

//https://api.nasa.gov/planetary/apod
//
