import React from 'react';
import {useAuth} from "../context/AuthContext"
import LoginPage from "../Components/LoginPage"
import Sidebar from '../Components/Parent';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faB} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'

const OrderLists = ({order}) =>{
	const {auth,setAuth} = useAuth(); 
	const countOrder = order.length
	return (
		<div>
			{auth ?
				<Sidebar>
					<div className="Main-OrderList">
						<div className="OrderList-Image" >
							<Image className="Menu-Image" src="https://as1.ftcdn.net/v2/jpg/03/31/35/98/1000_F_331359812_Ft97KZjlCiXwR0mV9MNVoqjc2IN3HkxN.jpg" width="200" height="200" alt="Roti"/>
						</div> 
						<div className="OrderList-List">
							<div className="OrderList-Header">
								<div className="OrderList-CountItem">
									{countOrder} Items
								</div>
							</div>
							<div className="OrderList-Body">
								{order.map((item,i)=>{
									return (
										<div key={i} className="ListOrder">
											<div className="ListOrder-Header">
												<p>{item.OrderName}</p>
												<p>{item.OrderPrice} B</p>
											</div>
											<div className="ListOrder-Body">
												{item.ChooseMenu.map((item,i)=>{
													return(
														<div key={i} className="ListOrder-ChooseMenu">
															<p>- {item.label}</p>
															<p>{item.value} B</p>
														</div>
													)
												})}
											</div>
										</div>
									)
								})}
							</div>
							<div className="ListOrder-Footer-1">
								<p>ราคา 130</p>
							</div>

							<div className="ListOrder-Footer-2">
								<p>130</p>
								<FontAwesomeIcon icon={faB} style={{width:50,height:50}} color="white"/>
							</div>
						</div>
					</div>	
				</Sidebar>
			: <LoginPage/>}
		</div>
	)
}

export const getServerSideProps = async () =>{
	try{
		const res = await fetch("https://point-of-sale-backend.vercel.app/order/getAllOrder");
		const order = await res.json()
		return {
			props:{
				order
			} 
		}
	}catch(e){
		console.log(e);
		return null;
	}
}

export default OrderLists