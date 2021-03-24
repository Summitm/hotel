<template>
<div>
  <header id="header">
    <div class="container">
		<div class="row m-0">
			<div class="col-xl-3 col-lg-2 col-md-4 col-3 p-0">
			<div class="navbar-header">
				<router-link tag="a" class="navbar-brand page-scroll specials" to="/">
				Museum Heritage Restaurant
				<!-- <img alt="Museum Heritage Restaurant" src="../../public/static/images/HeritageRestaurant-logo-min.png" /> -->
				</router-link>
			</div>
			</div>
			<div class="col-xl-9 col-lg-10 col-md-8 col-9 p-0 text-right">
				<div id="menu" class="navbar-collapse collapse">
					<ul class="nav navbar-nav">
						<li class="level">
							<router-link tag="a" to="/" class="a page-scroll">Home</router-link>
						</li>
						<li class="level dropdown set">
							<a
								tag="a"
								@click="scrollMeTo('thisMenu')"
								class="a page-scroll ref-menu"
							>Menu</a>
						</li>
						<li class="level">
							<router-link tag="a" to="/about" class="page-scroll">About Us</router-link>
						</li>
						<li class="level">
							<router-link tag="a" to="/reservations" class="a page-scroll">Reservation</router-link>
						</li>
						<li class="level dropdown set">
							<router-link to="/events" class="page-scroll">Media <span class="fa fa-caret-down"></span></router-link>
							<span class="opener plus"></span> 
							<div class="megamenu mobile-sub-menu content">
								<div class="megamenu-inner-top">
									<ul class="sub-menu-level1">
										<li class="level2">
											<ul class="sub-menu-level2 ">
												<li class="level3"><router-link tag="a" to="/events"><span>■</span>Events</router-link></li>
												<li class="level3"><router-link tag="a" to="/gallery-view"><span>■</span>Gallery</router-link></li>				                            	</ul>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<!-- <li class="level">
							<router-link tag="a" to="/gallery-view" class="page-scroll">Event</router-link>
						</li> -->
						<li class="level">
							<router-link tag="a" to="/contact" class="page-scroll">Contact</router-link>
						</li>
					</ul>
				</div>
				<div class="header-right-link">
					<ul>
						<li class="call-icon">
							<router-link tag="a" to="/">
							<span class="icon"></span>
							<div class="link-text">+254 700 202 222</div>
							</router-link>
						</li>
						<li class="cart-icon btn">
							<router-link tag="a" to="/">
							<span class="icon"></span>
							<!-- <div class="link-text">0 items - <span>KES 0.00</span></div> -->
							</router-link>
						</li>
						<li class="side-toggle">
							<button
								data-target=".navbar-collapse"
								data-toggle="collapse"
								class="navbar-toggle"
								type="button"
							>
							<span></span>
							</button>
						</li>
					</ul>
				</div>
			</div>
			</div>
		</div>
	</header>
</div>
</template>

<script>
export default {
	name: 'Header',
	components: {},
	methods: {
		scrollMeTo(refName) {
			var element = document.getElementById(refName);
			var top = element.offsetTop;

			window.scrollTo(0, top);
		}
	}
	
}
</script>

<style scoped>
.cart-icon{
	background-color:#91b842;
	border-radius:12px;
}
.ref-menu{
	color:#fff !important;
}
.ref-menu:hover{
	color:#fd9d3e !important;
}
.specials{
	margin-top: 10px;
	color: #fd9d3e;
	background-color: #fff;
	font-weight: bold;
}
</style>