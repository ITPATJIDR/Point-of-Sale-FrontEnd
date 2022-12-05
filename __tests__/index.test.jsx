import {render, screen, renderHook, act} from "@testing-library/react"
import Home, {getServerSideProps} from "../pages/index"
import { useAuth, AuthProvider } from "../context/AuthContext"
import {createRequest, createResponse} from "node-mocks-http"
window.axios = require('axios')
import '@testing-library/jest-dom'

describe('Home', () => {
	it('Renders a Home And Rotimax Cafe', async () => {
		render(<Home />)
		const head = screen.getByText("RotiMax Cafe")

		expect(head).toBeInTheDocument()
	})

	it('state Auth is start with false and when setState is true', async () => {
		const wrapper  = ({children}) => <AuthProvider auth={false}>{children}</AuthProvider>
		const { result } = renderHook(() => useAuth(), { wrapper })

		expect(result.current.auth).toBe(false) 

		act(() =>{
			result.current.setAuth(true)
		})

		expect(result.current.auth).toBe(true) 
	})

	it('getServerSideProps is work', async () =>{
		const props = await getServerSideProps()
		expect(props).toBeDefined()
	})

})
