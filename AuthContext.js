import React, { createContext, useContext, useState } from 'react'
import { auth, db } from './firebase'
import {
	onAuthStateChanged,
	signInWithCredential,
	GoogleAuthProvider,
	setPersistence,
	browserLocalPersistence,
} from 'firebase/auth'

const Auth = createContext()

const AuthContext = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loggedIn, setLoggedIn] = useState(false)

	const init = () => {
		// Detect auth state
		onAuthStateChanged(auth, (user) => {
			if (user != null) {
				console.log('Below User is logged in:')
				console.log(user)
				setUser(user)
				setLoggedIn(true)
			} else {
				setLoggedIn(false)
				console.log('No user logged in!')
			}
		})
	}
	init()

	return (
		<Auth.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
			{children}
		</Auth.Provider>
	)
}

export default AuthContext

export const AuthState = () => useContext(Auth)
