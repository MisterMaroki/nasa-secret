import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Login from './Login'
import SignUp from './SignUp'
import { textFieldSx } from '../../styles/themeVariables'
import GoogleButton from 'react-google-button'
import { AuthState } from '../../AuthContext'
import { auth } from '../../firebase'

const TabPanel = (props) => {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }} className="">
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
}

const a11yProps = (index) => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

const AuthModal = () => {
	const [value, setValue] = React.useState(0)
	const { signInWithGoogle } = AuthState()
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<Box
			sx={{
				width: '80%',
				maxWidth: '400px',
				backgroundColor: 'whitesmoke',
				borderRadius: '5px',
				boxShadow:
					'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
				border: '3px solid lightgrey',
			}}
		>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					<Tab label="LOGIN" {...a11yProps(0)} />
					<Tab label="SIGNUP" {...a11yProps(1)} />
				</Tabs>
			</Box>

			{value === 0 ? <Login /> : <SignUp />}

			<Box className="google">
				<span style={{ color: 'darkgrey' }}>OR</span>
				<GoogleButton
					style={{ width: '90%', outline: 'none', borderRadius: '1px' }}
					onClick={() => signInWithGoogle()}
				>
					Google
				</GoogleButton>
			</Box>
		</Box>
	)
}

export default AuthModal
