import {render, screen} from "@testing-library/react"
import LoginPage from "../Components/LoginPage"
import '@testing-library/jest-dom'

describe('Home', () => {
	it('Have Placeholder username and password' , async () => {
		render(<LoginPage />)
		const username = screen.getByPlaceholderText("Username")
		const password = screen.getByPlaceholderText("Username")

		expect(username).toBeInTheDocument();
		expect(password).toBeInTheDocument();

	})
})
