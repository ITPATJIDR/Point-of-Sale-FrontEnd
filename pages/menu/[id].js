import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {useAuth} from "../../context/AuthContext"
import LoginPage from '../../Components/LoginPage';
import Sidebar from '../../Components/Parent';
import Image from 'next/image';
import Select from 'react-select';


const Menu = ({menu}) =>{

	const {auth,setAuth} = useAuth();
	const [extraMenu,setExtraMenu] = useState()
	const value = [];
	const router = useRouter();

	const handleSubmit = (e) =>{
		const data  = {
			OrderName: menu.MenuName,
			ChooseMenu: extraMenu,
			OrderPrice: menu.MainPrice
		} 
		const res = fetch("http://localhost:5000/order/addOrder",{
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(data)
		}) 
		router.push('/')
	}

	const handleChange = (e) =>{
		const options = e;
		const ExtraMenuCount = menu.ExtraMenu.length;
		value.push(options)
		if (value.length >= ExtraMenuCount){
			setExtraMenu(value)
		}
	}

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
						<div className="Render-ExtraMenu"> 
							{menu.ExtraMenu.map((item,i)=>{
								return(
									<div key={i} className="ExtraMenuName">
										<p>{item.ExtraMenuName}</p>
										<div className="ListMenu">
											<Select key={i} className="ListMenu-Choose" options={item.ListMenu.map(e =>({ label: e.Name, value: e.Price}))} onChange={(e) => handleChange(e)} />
										</div>
									</div>
								)
							})}
							<button type="Submit" disabled={extraMenu ? false:true} className="Choose-ExtraMenu-Button" onClick={handleSubmit}>Submit</button>
						</div>
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
		const res = await fetch("https://point-of-sale-backend.vercel.app/menu/getMenu",{
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
