import React, {createContext, useContext ,useState} from "react"

export const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) =>{
	const [auth,setAuth] = useState(false)

	return <AuthContext.Provider value={{auth,setAuth}}>{children}</AuthContext.Provider>
} 
