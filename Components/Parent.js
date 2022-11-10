import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDay, faHouse, faBars,faShoppingCart,faCheck,faInbox,faNetworkWired,faCartPlus} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const Sidebar = ({children}) =>{

	return (
		<div className="Sidebar-Main">
			<aside>
				<Link href="/">
					<div className="Sidebar-Link">
						<FontAwesomeIcon icon={faHouse} style={{width:50,height:50}} color="white" /> 
						<p>Menu</p>
					</div>
				</Link>
				<Link href="/">
					<div className="Sidebar-Link">
						<FontAwesomeIcon icon={faBars} style={{width:50,height:50}} color="white" /> 
						<p>Choose Menu</p>
					</div>
				</Link>
				<Link href="/">
					<div className="Sidebar-Link">
						<FontAwesomeIcon icon={faCheck} style={{width:50,height:50}} color="white" /> 
						<p>Current Order</p>
					</div>
				</Link>
				<Link href="/">
					<div className="Sidebar-Link">
						<FontAwesomeIcon icon={faCalendarDay} style={{width:50,height:50}} color="white" /> 
						<p>Dashboard</p>
					</div>
				</Link>
				<Link href="/">
					<div className="Sidebar-Link">
						<FontAwesomeIcon icon={faShoppingCart} style={{width:50,height:50}} color="white" /> 
						<p>Order List</p>
					</div>
				</Link>
				<Link href="/">
					<div className="Sidebar-Link">
						<FontAwesomeIcon icon={faBars} style={{width:50,height:50}} color="white" /> 
						<p>Queue List</p>
					</div>
				</Link>
				<Link href="/">
					<div className="Sidebar-Link">
						<FontAwesomeIcon icon={faInbox} style={{width:50,height:50}} color="white" /> 
						<p>IC</p>
					</div>
				</Link>
				<Link href="/">
					<div className="Sidebar-Link">
						<FontAwesomeIcon icon={faCartPlus} style={{width:50,height:50}} color="white" /> 
						<p>Add Menu</p>
					</div>
				</Link>
				<Link href="/">
					<div className="Sidebar-Link">
						<FontAwesomeIcon icon={faNetworkWired} style={{width:50,height:50}} color="white" /> 
						<p>Branch</p>
					</div>
				</Link>
			</aside>
			<div className="Content-Main">
				{children}
			</div>
		</div>
	)
}

export default Sidebar;