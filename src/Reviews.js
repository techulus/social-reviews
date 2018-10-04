import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

const defaultOptions = {
	conversation: "none", // or all
	cards: "hidden", // or visible
	linkColor: "rgb(33, 153, 256)", // default is blue
	theme: "light" // or dark
};

export default class Reviews {
	constructor(options) {
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

		const reviews = this.generateReviews(options.tweetIds);
		this.updateContainer(options.selector, reviews);
		this.initializeCarousel(options.selector, Object.assign({}, this.carouselOptions, options.carouselOptions));
		this.initializeTwitter();
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

	generateReviews(ids) {
		const reviews = [];
		ids.forEach(id => {
			const review = document.createElement("li");
			review.className = this.options.className + " glide__slide";
			review.id = id;
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
