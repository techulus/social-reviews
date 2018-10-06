import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "./styles.css";

const defaultOptions = {
	conversation: "none", // or all
	cards: "hidden", // or visible
	linkColor: "rgb(33, 153, 256)", // default is blue
	theme: "light", // or dark
	height: 410
};

const errorLog = (data) => {
	console.error("[social-reviews]", data)
}

const validSocialNetworks = ['twitter', 'instagram']
export default class Reviews {
	constructor(options) {
		if (!options) {
			return errorLog("Required options are missing, please check documentation: https://github.com/techulus/social-reviews#quick-start")
		}
		if (!options.selector) {
			return errorLog("Option 'selector' is missing, please check documentation: https://github.com/techulus/social-reviews#quick-start")
		}
		if (!options.type || !validSocialNetworks.includes(options.type)) {
			return errorLog("Option 'type' is missing or invalid, please check documentation: https://github.com/techulus/social-reviews#quick-start")
		}
		if (!options.postIds || !options.postIds.length) {
			return errorLog("Option 'postIds' is missing, please check documentation: https://github.com/techulus/social-reviews#quick-start")
		}

		this.options = options;
		this.options.className = `${options.selector.replace("#", "")}-tweets`;

		this.carouselOptions = {
			type: "carousel",
			perView: 3,
			gap: 20,
			autoplay: 5000,
			animationDuration: 750,
			hoverpause: true,
			breakpoints: {
				1200: {
					perView: 2
				},
				760: {
					perView: 1
				}
			}
		};

		let reviews = []
		if (options.type === 'twitter') {
			reviews = this.generateTwitterReviews(options.postIds);
			this.updateContainer(options.selector, reviews);
			this.initializeCarousel(options.selector, Object.assign({}, this.carouselOptions, options.carouselOptions));
			this.initializeTwitter();
		} else if (options.type === 'instagram') {
			reviews = this.generateInstagramReviews(options.postIds);
			this.updateContainer(options.selector, reviews);
			this.initializeCarousel(options.selector, Object.assign({}, this.carouselOptions, options.carouselOptions));
		}
	}

	updateContainer(selector, reviews) {
		let container = document.querySelector(selector);
		container.className = "glide";

		let glideTrack = document.createElement("div");
		glideTrack.className = "glide__track";
		glideTrack.dataset.glideEl = "track";

		let glideUl = document.createElement("ul");
		glideUl.className = "glide__slides";
		reviews.forEach(review => {
			glideUl.innerHTML += review;
		});

		glideTrack.innerHTML = glideUl.outerHTML;
		container.innerHTML = glideTrack.outerHTML;
	}

	generateTwitterReviews(ids) {
		const reviews = [];
		ids.forEach(id => {
			const review = document.createElement("li");
			review.className = this.options.className + " glide__slide";
			review.id = id;
			reviews.push(review.outerHTML);
		});
		return reviews;
	}

	generateInstagramReviews(ids) {
		const reviews = [];
		ids.forEach(id => {
			const review = document.createElement("li");
			review.className = this.options.className + " glide__slide";

			const iframe = document.createElement("iframe");
			iframe.src = `https://www.instagram.com/p/${id}/embed`
			iframe.frameBorder = "0"
			iframe.scrolling = "no"
			iframe.allowTransparency = "true"
			iframe.width = 350
			iframe.height = defaultOptions.height || this.options.height

			review.innerHTML = iframe.outerHTML
			reviews.push(review.outerHTML);
		});
		return reviews;
	}

	initializeTwitter() {
		const tweets = document.querySelectorAll("." + this.options.className);
		tweets.forEach(tweet => {
			twttr.widgets.createTweet(tweet.id, tweet, {
				conversation: this.options.conversation || defaultOptions.conversation,
				cards: this.options.cards || defaultOptions.cards,
				linkColor: this.options.linkColor || defaultOptions.linkColor,
				theme: this.options.theme || defaultOptions.theme
			});
		});
	}

	initializeCarousel(selector, options) {
		new Glide(selector, options).mount();
	}
}
