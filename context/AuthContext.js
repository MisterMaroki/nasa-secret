import React, { createContext, useContext, useState } from 'react'
import { auth, db, provider } from '../firebase'
import {
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth'

const Auth = createContext()

const AuthContext = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loggedIn, setLoggedIn] = useState(false)

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result)
				const token = credential.accessToken
				// The signed-in user info.
				const user = result.user
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code
				const errorMessage = error.message
				// The email of the user's account used.
				const email = error.customData.email
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error)
				// ...
			})
	}

	const init = () => {
		// Detect auth state
		onAuthStateChanged(auth, (use) => {
			if (use != null) {
				// console.log('Below User is logged in:')
				// console.log(user)
				!user && setUser(use) && setLoggedIn(true)
			} else {
				setLoggedIn(false)
				console.log('No user logged in!')
			}
		})
	}
	init()

	return (
		<Auth.Provider
			value={{
				user,
				setUser,
				loggedIn,
				setLoggedIn,
				signInWithGoogle,
			}}
		>
			{children}
		</Auth.Provider>
	)
}

export default AuthContext

export const AuthState = () => useContext(Auth)
