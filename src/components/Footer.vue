<template>
    <footer>
		<div class="container">
			<div class="footer">
				<div class="row">
					<div class="col-xl-4 col-lg-4 col-md-4 footer-box">
						<div class="footer-logo">
							<img src="../../public/static/images/HeritageRestaurant-logo-min-footer.png" alt="fooret-logo">
							<p class="footer-des">Museum Hill, Nairobi National Museum,Nairobi, Kenya</p>
							<ul>
								<li>phone - <router-link to="/">(+254) 734 860 947, (+254) 700 202 222</router-link></li>
								<li>email - <router-link to="/">
                                    info@museumheritagerestaurant.com</router-link></li>
							</ul><!--mailto:dine@museumheritagerestaurant.com-->
						</div>
					</div>

					<div class="col-xl-4 col-lg-4 col-md-4 footer-box">
						<div class="opening-hours">
							<h2>Opening Hours</h2>
							<ul>
								<li>Mon - Tues : <span>7.30 am - 5.30 pm</span></li>
								<li>Wed - Thurs : <span>7.30 am - 5.30 pm</span></li>
								<li>Fri - Sat : <span>7.30 am - 5.30 pm</span></li>
								<li>Sunday :  <span>7.30 am - 5.30 pm</span></li>
								<li>Launch :  <span class="footer-close">Everyday</span></li>
							</ul>
						</div>
					</div>

					<div class="col-xl-4 col-lg-4 col-md-4 footer-box">
						<div class="useful-links">
							<h2>useful links</h2>
							<ul>
								<li>
									<a
										tag="a"
										@click="scrollMeTo('thisMenu')"
										class="a page-scroll ref-menu"
									>Menu</a>
								</li>
								<li><router-link to="/reservations">Reservations</router-link></li>
								<li><router-link to="/about">About</router-link></li>
								<li><router-link to="/contact">Contacts Us</router-link></li>
								<li><router-link to="/contact">Restaurant Gallery</router-link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="copyright">
				<div class="row">
					<div class="col-xl-6 col-lg-6 col-md-6 copyright-box">
						<p class="copy-text">© Museum Heritage Restaurant |
                            All Rights Reserved. Designed by <strong>CodeBytes Softwares Inc.</strong></p>
					</div>

					<div class="col-xl-6 col-lg-6 col-md-6 copyright-box">
						<ul>
							<li><router-link to="/"><i class="fa fa-facebook" aria-hidden="true"></i></router-link></li>
							<li><router-link to="/"><i class="fa fa-twitter" aria-hidden="true"></i></router-link></li>
							<li><router-link to="/"><i class="fa fa-linkedin" aria-hidden="true"></i></router-link></li>
							<li><router-link to="/"><i class="fa fa-instagram" aria-hidden="true"></i></router-link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	components:{},
	methods: {
		scrollMeTo(refName) {
			var element = document.getElementById(refName);
			var top = element.offsetTop;
			//this.$refs[refName]

			window.scrollTo(0, top);
		}
	}
}
</script>

<style scoped>
.ref-menu{
	color:#fff !important;
}
.ref-menu:hover{
	color:#fd9d3e !important;
}
</style>