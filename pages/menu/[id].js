import React from 'react';
import {useAuth} from "../../context/AuthContext"
import LoginPage from '../../Components/LoginPage';
import Sidebar from '../../Components/Parent';
import Image from 'next/image';


const Menu = ({menu}) =>{
	const {auth,setAuth} = useAuth();
	return (
		<div>
			{auth ? 
			<Sidebar>
				<div className="Main-Choose-Menu">
					<div className="Choose-Menu-Image" >
						<Image className="Menu-Image" src="https://cdn.mygingergarlickitchen.com/images/800px/800px-Food-Styling-indian-roti-recipe-phulka-chapati-Pinterest.jpg" width="200" height="200" alt="Roti"/>
						<div className="Choose-Menu-Name">
							<p>{menu.MenuName}</p>
						</div>
					</div>
					<div className="Choose-ExtraMenu" >
						{menu.ExtraMenu.map((item,i)=>{
							return(
								<div key={i} className="ExtraMenuName">
									<p>{item.ExtraMenuName}</p>
									{item.ListMenu.map((item,i)=>{
										return (
											<div key={i}>
												<h2 >{item.Name}</h2>
											</div>
										)
									})}
								</div>
							)
						})}
					</div>
				</div>
			</Sidebar>
			:<LoginPage/>}
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