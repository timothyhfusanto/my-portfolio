import chioImg from '../assets/chio/chio.png';
import chioImg2 from '../assets/chio/chio2.png';
import chioImg3 from '../assets/chio/chio3.png';
import chioImg4 from '../assets/chio/chio4.png';
import chioImg5 from '../assets/chio/chio5.png';
import ovalImg from '../assets/oval.png';
import skillswapImg from '../assets/skillswap.png';
import expoImg from '../assets/expo.svg';
import stripeImg from '../assets/stripe.svg';
import laravelImg from '../assets/laravel.svg';
import paypalImg from '../assets/paypal.svg';
import sendgridImg from '../assets/sendgrid.svg';
import awsImg from '../assets/aws.svg';
import elasticImg from '../assets/elastic.svg';

export const projects = [
	{
		id: "chio",
		name: "Chio",
		images: [
			chioImg,
			chioImg2,
			chioImg3,
			chioImg4,
			chioImg5
		],
		description: "Beauty Lifestyle App",
		fullDescription: "Chio is a social-commerce mobile platform tailored for the beauty and lifestyle industry. It uniquely combines social networking and e-commerce, enabling users to connect with beauty service providers and influencers. The platform features Stripe integration for secure, seamless service bookings, and real-time chat powered by Socket.IO to enhance user interaction. A seller dashboard equips providers with tools for managing orders, analytics, and reviews, while an admin portal offers advanced insights into user engagement and platform performance.", stack: [
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
			{ name: "SendGrid", logo: sendgridImg },
			{ name: "AWS S3", logo: awsImg },
			{ name: "Elasticsearch", logo: elasticImg }
		],
		link: {
			github: "https://github.com/jarenl0ke/chio",
			report: "https://docs.google.com/document/d/1p5DQMJoO1vDtNUyiuoFPO22TEJq3y4JUgm0NoxRaIf4/edit?usp=sharing",
			slides: "",
			figma: "https://www.figma.com/design/cfw3srLs423nmbMnTpS1Ov/Chio.?node-id=975-9028&t=1pxdBvX0OzshEfse-1",
		},
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
		],
		date: "Apr 2025",
		category: "Mobile app & web / full-stack"
	},
	{
		id: "skillswap",
		name: "SkillSwap",
		images: [skillswapImg],
		description: "Freelancer marketplace",
		fullDescription: "SkillSwap is a marketplace that enables freelancers to offer their services and trade skills with one another. Freelancers can list services for direct orders from regular users or offer them for skill-swapping with other freelancers. Like most commerce platforms, it includes features such as listing management, bookings, and reviews.",
		stack: [
			{
				name: "Django",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
			},
			{
				name: "Python",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
			},
			{
				name: "MySQL",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
			},
			{
				name: "Bootstrap",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
			},
			{
				name: "jQuery",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
			},
			{
				name: "HTML",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
			},
			{
				name: "CSS",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
			},
		],
		link: {
			github: "https://github.com/jarenl0ke/chio",
			report: "",
			slides: ""
		},
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
		],
		date: "Apr 2024",
		category: "web / full-stack"
	},
	{
		id: "ovalevolution",
		name: "Oval Evolution",
		images: [ovalImg],
		description: "One-stop customer service system",
		fullDescription: "OvalEvolution is a one-stop customer service platform designed to streamline restaurant operations. It offers an online menu ordering system that allows customers to place orders directly from their devices. The platform includes features such as order management, payment processing, and customer feedback collection — all aimed at enhancing the dining experience and improving operational efficiency. By eliminating manual service queues, it provides restaurants with a more streamlined approach to handling orders and managing menus.",
		stack: [
			{
				name: "Laravel",
				logo: laravelImg,
			},
			{
				name: "PHP",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
			},
			{
				name: "Blade",
				logo: "https://blade-ui-kit.com/images/icon.svg",
			},
			{
				name: "MySQL",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
			},
			{
				name: "Bootstrap",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
			},
			{
				name: "jQuery",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
			},
			{
				name: "HTML",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
			},
			{
				name: "CSS",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
			},
			{
				name: "PayPal",
				logo: paypalImg,
			}
		],
		link: {
			github: "https://github.com/jarenl0ke/chio",
			report: "",
			slides: ""
		}, 
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
		],
		date: "Aug 2023",
		category: "web / full-stack"
	},
];