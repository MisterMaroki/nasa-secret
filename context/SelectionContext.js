import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AuthState } from './AuthContext'

const Selection = createContext()

const SelectionContext = ({ children }) => {
	const [selected, setSelected] = useState(() => null)
	const { user } = AuthState()
	const router = useRouter()

	useEffect(() => {
		if (user === null) {
			router.push('/auth')
		}

		const handleClick = (e) => {
			// console.log(e.target.toString())
			setSelected(null)
		}
		window.addEventListener('click', handleClick)

		return () => window.removeEventListener('click', handleClick)
	}, [user])

	const select = (e, folderName) => {
		e.stopPropagation()
		setSelected(folderName)
	}

	return (
		<Selection.Provider value={{ selected, setSelected, select }}>
			{children}
		</Selection.Provider>
	)
}

export default SelectionContext

export const SelectionState = () => useContext(Selection)

// Calling it state hook
// Calling it useSelectionContext (much like a custom hook)
