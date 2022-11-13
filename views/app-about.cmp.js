import mainHeader from '../cmps/app-header.cmp.js'

export default {
  template: `
  <main-header/>
  <section class="about-page">
		<h1 class="title-about-us">About us</h1>
		<section class="developer-section flex align-center">
            <div class="imgs-container flex flex-column align-center">
			<img src="./assets/img/yair-photo.jpeg" width=140 class="my-photo" alt="">
			<div class=" flex flex-column justify-center align-items-center">
				<div class="flex icons-container justify-evenly align-items-center">
					<a href="https://www.linkedin.com/in/yair-orchen-11572a223" target="_blank">
						<div class="icon">
							<img class="linkedin-icon img-icon" src="./assets/img/linkedin.png" width="30" height="30"
								alt="">
						</div>
					</a>
					<a href="https://www.facebook.com/yair.orchen" target="_blank">
						<div class="icon">
							<img class="facebook-icon img-icon" src="./assets/img/facebook.png" width="30" height="30"
								alt="">
						</div>
					</a>
					<a href="https://twitter.com/boaz_deri" target="_blank">
						<div class="icon">
							<img class="twitter-icon img-icon" src="./assets/img/twitter.png" width="30" height="30"
								alt="">
						</div>
					</a>
					<a href="https://www.instagram.com/yairorchen/" target="_blank">
						<div class="icon">
							<img class="instagram-icon img-icon " src="./assets/img/instagram.png" width="30"
								height="30" alt="">
						</div>
					</a>
				</div>
            </div>
		</div>
			<div class="p-section">
				<p class="p-container">
                My name is Yair, i love to program , travel, going to festivals and explore new people and books! Hope you will enjoy from the app that i developed with Boaz!
                </p>
			</div>
		</section>
		<section class="developer-section flex align-center">
            <div class="imgs-container flex flex-column">
			<img src="./assets/img/my-photo.jpeg" width=140 class="my-photo" alt="">
			<div class=" flex flex-column justify-center align-items-center">
				<div class="flex icons-container justify-evenly align-items-center">
					<a href="https://www.linkedin.com/in/boaz-deri/" target="_blank">
						<div class="icon">
							<img class="linkedin-icon img-icon" src="./assets/img/linkedin.png" width="30" height="30"
								alt="">
						</div>
					</a>
					<a href="https://www.facebook.com/boazderi/" target="_blank">
						<div class="icon">
							<img class="facebook-icon img-icon" src="./assets/img/facebook.png" width="30" height="30"
								alt="">
						</div>
					</a>
					<a href="https://twitter.com/boaz_deri" target="_blank">
						<div class="icon">
							<img class="twitter-icon img-icon" src="./assets/img/twitter.png" width="30" height="30"
								alt="">
						</div>
					</a>
					<a href="https://www.instagram.com/boazderi/" target="_blank">
						<div class="icon">
							<img class="instagram-icon img-icon " src="./assets/img/instagram.png" width="30"
								height="30" alt="">
						</div>
					</a>
				</div>
			</div>
            </div>
            <div class="p-section">
				<p class="p-container">
                My name is Boaz, i love to play guitar, programming of course!, travel, and explore new podacasts! Hope you will enjoy from the app that i developed with Yair!
				</p>
			</div>
		</section>
	</section>

    `,
  components: {
    mainHeader,
  },
}
