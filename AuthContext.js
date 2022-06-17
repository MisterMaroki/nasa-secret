import React, { createContext, useContext, useState } from 'react'

const Auth = createContext({ user: 'Jimmy' })

const AuthContext = ({ children }) => {
	const [user, setUser] = useState('Jimmy')

	return <Auth.Provider value={{ user, setUser }}>{children}</Auth.Provider>
}

export default AuthContext

export const AuthState = () => useContext(Auth)
