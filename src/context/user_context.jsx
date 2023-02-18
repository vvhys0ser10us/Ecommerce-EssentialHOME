import { createContext, useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated, loginWithRedirect, logout }}
    >
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = () => {
  return useContext(UserContext)
}

export { UserProvider, useUserContext }
