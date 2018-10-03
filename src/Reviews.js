import Siema from "siema";

const defaultOptions = {
	conversation: "none", // or all
	cards: "hidden", // or visible
	linkColor: "rgb(33, 153, 256)", // default is blue
	theme: "light" // or dark
};

const carouselOptions = {
	duration: 500,
	easing: "ease-out",
	perPage: 3,
	startIndex: 0,
	draggable: true,
	multipleDrag: true,
	threshold: 20,
	loop: true,
	rtl: false
};

const defaultStyles = className => `
	.${className} {
		margin: 0 20px;
	}
`;

export default class Reviews {
	constructor(options) {
		this.options = options;
		this.options.className = `${options.selector.replace("#", "")}-tweets`;
		this.injectStyles(defaultStyles(this.options.className));

		const reviews = this.generateReviews(options.tweetIds);
		this.updateContainer(options.selector, reviews);
		this.initializeTwitter();
		this.initializeCarousel(options.selector, options.carouselOptions || {});
	}

	injectStyles(str) {
		var node = document.createElement("style");
		node.innerHTML = str;
		document.body.appendChild(node);
	}

	updateContainer(selector, reviews) {
		let container = document.querySelector(selector);
		reviews.forEach(review => {
			container.innerHTML += review;
		});
	}

	generateReviews(ids) {
		const reviews = [];
		ids.forEach(id => {
			const review = document.createElement("div");
			review.className = this.options.className;
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
		let that = this;
		this.carousel = new Siema({
			selector: selector,
			duration: options.duration || carouselOptions.duration,
			easing: options.easing || carouselOptions.easing,
			perPage: options.perPage || carouselOptions.perPage,
			startIndex: options.startIndex || carouselOptions.startIndex,
			draggable: options.startIndex || carouselOptions.startIndex,
			multipleDrag: options.multipleDrag || carouselOptions.multipleDrag,
			threshold: options.threshold || carouselOptions.threshold
		});
		setInterval(() => that.carousel.next(), 5000);
	}
}
