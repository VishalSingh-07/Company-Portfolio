import React from "react"
import logo from "../img//logo-white.png"
import "./header.css"
function header() {
	return (
		<header class="header">
			<div class="logo-box">
				<img class="logo" src={logo} alt="logo" />
			</div>
			<div class="header-textbox">
				<h1 class="heading-primary">
					<span class="heading-primary-main">Outdoors</span>
					<span class="heading-primary-sub">is where life happens</span>
				</h1>
				<a href="$" class="btn btn-white btn-animated">
					Discover our tours
				</a>
			</div>
		</header>
	)
}

export default header
