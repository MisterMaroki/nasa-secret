import React, { createContext, useContext, useState } from 'react'

const Selection = createContext()

const SelectionContext = ({ children }) => {
	const [selected, setSelected] = useState(null)

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
