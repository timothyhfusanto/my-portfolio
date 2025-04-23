import chioImg from '../assets/chio/chio.png';
import chioImg2 from '../assets/chio/chio2.png';
import chioImg3 from '../assets/chio/chio3.png';
import ovalImg from '../assets/oval.png';
import skillswapImg from '../assets/skillswap.png';
import expoImg from '../assets/expo.svg';
import stripeImg from '../assets/stripe.svg';


export const projects = [
	{
		id: "chio",
		name: "Chio - Beauty Lifestyle App",
		images: [
			chioImg,
			chioImg2,
			chioImg3,
		],
		description: "A social-commerce mobile platform for the beauty and lifestyle industry.", 
		fullDescription: "Chio is a social-commerce mobile platform tailored for the beauty and lifestyle industry. It uniquely combines social networking and e-commerce, enabling users to connect with beauty service providers and influencers. The platform features Stripe integration for secure, seamless service bookings, and real-time chat powered by Socket.IO to enhance user interaction. A seller dashboard equips providers with tools for managing orders, analytics, and reviews, while an admin portal offers advanced insights into user engagement and platform performance.",		stack: [
			{ name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
			{ name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
			{ name: "Expo", logo: expoImg },
			{ name: "NestJS", logo: "https://nestjs.com/img/logo-small.svg" },
			{ name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
			{ name: "Stripe", logo: stripeImg },
			{ name: "Socket.IO", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
			{ name: "Nivo", logo: "https://raw.githubusercontent.com/plouc/nivo/refs/heads/master/website/static/favicon.ico" },
			{ name: "Antd", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg" },
			{ name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
			{ name: "Gluestack UI", logo: "https://gluestack.io/icon/logo/gluestack/brandLogo.svg" },
			{ name: "Google Analytics 4", logo: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" },
		],
		link: "https://github.com/yourusername/chio",
		details: "/project/chio",
		keyFeatures: [
			"Algorithm-driven post recommendations for a personalized user experience.",
			"User-friendly interface tailored to beauty and lifestyle content.",
			"Follower system for connecting users with beauty service providers and influencers.",
			"Seamless service booking and seller dashboard with order, analytics, and review management.",
			"Real-time chat with automated welcome messages powered by WebSockets.",
			"Integrated Stripe subscription payments using ChioCredit, the in-app booking currency.",
			"Automated email notifications for order confirmations and status updates.",
			"Admin portal with advanced analytics for tracking user engagement and platform performance."
		]
	},
	{
		id: "skillswap",
		name: "SkillSwap - Freelancer Marketplace",
		images: [skillswapImg],
		description: "A marketplace for freelancers to trade their offered skills.",
		stack: [
			{ name: "Django", logo: "" },
			{ name: "Python", logo: "" },
			{ name: "MySQL", logo: "" },
			{ name: "Bootstrap", logo: "" },
			{ name: "jQuery", logo: "" },
		],
		link: "https://github.com/yourusername/shelfserve",
		details: "/project/skillswap",
		keyFeatures: [
			"Algorithm-driven post recommendations for a personalized user experience.",
			"User-friendly interface tailored to beauty and lifestyle content.",
			"Follower system for connecting users with beauty service providers and influencers.",
			"Seamless service booking and seller dashboard with order, analytics, and review management.",
			"Real-time chat with automated welcome messages powered by WebSockets.",
			"Integrated Stripe subscription payments using ChioCredit, the in-app booking currency.",
			"Automated email notifications for order confirmations and status updates.",
			"Admin portal with advanced analytics for tracking user engagement and platform performance."
		]
	},
	{
		id: "ovalevolution",
		name: "OvalEvolution - One-stop customer service platform",
		images: [ovalImg],
		description: "An online menu ordering system for restaurants to streamline their operations.",
		stack: [
			{ name: "Laravel", logo: "" },
			{ name: "PHP", logo: "" },
			{ name: "MySQL", logo: "" },
			{ name: "Bootstrap", logo: "" },
			{ name: "jQuery", logo: "" },
			{ name: "HTML", logo: "" },
			{ name: "CSS", logo: "" },
			{ name: "Blade", logo: "" },
		],
		link: "https://github.com/yourusername/shelfserve",
		details: "/project/ovalevolution",
		keyFeatures: [
			"Algorithm-driven post recommendations for a personalized user experience.",
			"User-friendly interface tailored to beauty and lifestyle content.",
			"Follower system for connecting users with beauty service providers and influencers.",
			"Seamless service booking and seller dashboard with order, analytics, and review management.",
			"Real-time chat with automated welcome messages powered by WebSockets.",
			"Integrated Stripe subscription payments using ChioCredit, the in-app booking currency.",
			"Automated email notifications for order confirmations and status updates.",
			"Admin portal with advanced analytics for tracking user engagement and platform performance."
		]
	},
];