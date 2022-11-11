import React, {useState} from 'react';
import {useAuth} from "../../context/AuthContext"
import LoginPage from '../../Components/LoginPage';
import Sidebar from '../../Components/Parent';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const MenuList = ({item,setChooseMenu}) =>{
	return(
		<div className="Main-Menu-List">
			{item.ListMenu.map((item,i)=>{
				return(
					<div key={i} className="ExtraMenu-List" onClick={(e) => setChooseMenu(item.Name)}>{item.Name}</div>
				)
			})}
		</div>
	)
}

const Menu = ({menu}) =>{

	const {auth,setAuth} = useAuth();
	const [chooseMenu,setChooseMenu] = useState();
	const [toggle,setToggle] = useState(false);
	const toggleChecked = () => setToggle(value => !value);

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
											<div className="ListMenu-Choose">
												<p>{chooseMenu}</p>
											</div>
											<div className="ListMenu-Button" onClick={toggleChecked}>
												{toggle 
												? <FontAwesomeIcon icon={faCaretUp} style={{width:50,height:50}} color="#730303" /> 
												: <FontAwesomeIcon icon={faCaretDown} style={{width:50,height:50}} color="#730303" />
												}
											</div>
										</div>
										{toggle ?  <MenuList item={item} setChooseMenu={setChooseMenu}/> : null}
									</div>
								)
							})}
							<button type="Submit" className="Choose-ExtraMenu-Button">Submit</button>
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