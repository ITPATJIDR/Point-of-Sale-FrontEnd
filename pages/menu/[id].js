import React from 'react';
import {useAuth} from "../../context/AuthContext"
import LoginPage from '../../Components/LoginPage';


const Menu = ({menu}) =>{
	const {auth,setAuth} = useAuth();
	console.log(menu)
	return (
		<div>
			{auth ? <div>hi</div>  :<LoginPage/>}
		</div>
	)
}

export const getServerSideProps = async (context) =>{
	try{
		const MenuId = {id:context.query.id}
		const res = await fetch("http://localhost:5000/menu/getMenu",{
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(MenuId)
		})
		const menu = await res.json() 
		return {
			props: {
				menu
			} 
		}
	}catch(e){
		console.log(e.message)
		return null;
	}
} 

export default Menu;