import chioImg from '../assets/chio/chio.png';
import chioImg2 from '../assets/chio/chio2.png';
import chioImg3 from '../assets/chio/chio3.png';
import chioImg4 from '../assets/chio/chio4.png';
import chioImg5 from '../assets/chio/chio5.png';
import chioImg6 from '../assets/chio/chio6.png';
import ovalImg from '../assets/oval/oval1.png';
import skillswapImg from '../assets/skillswap.png';
import expoImg from '../assets/tech-logo/expo.svg';
import stripeImg from '../assets/tech-logo/stripe.svg';
import laravelImg from '../assets/tech-logo/laravel.svg';
import paypalImg from '../assets/tech-logo/paypal.svg';
import sendgridImg from '../assets/tech-logo/sendgrid.svg';
import awsImg from '../assets/tech-logo/aws.svg';
import elasticImg from '../assets/tech-logo/elastic.svg';
import chioqrImg from '../assets/chio/qrcode.png';
import javaImg from "../assets/tech-logo/java.svg"
import smartsgImg from "../assets/smartsg/smartsg1.png";
import merlionImg from "../assets/merlion/merlion1.png";
import shelfserveImg from "../assets/shelfserve/shelfserve1.png";
import shelfserveImg2 from "../assets/shelfserve/shelfserve2.png";
import timchatImg from "../assets/timchat/timchat1.png";
import cloudinaryImg from "../assets/tech-logo/cloudinary.svg";

const notSorted = [
	{
		id: "chio",
		name: "Chio",
		type: "app",
		images: [
			chioImg,
			chioImg2,
			chioImg3,
			chioImg4,
			chioImg5,
			chioImg6
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
			github: "https://github.com/timothyhfusanto/chio",
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
		date: "Jan - Apr 2025",
		category: "Mobile app & web / full-stack",
		sites: [
			{ name: "Chio", link: "https://github.com/timothyhfusanto/chio", qr: chioqrImg },
			{ name: "Chio Admin", link: "https://chioadmin.vercel.app/" },
		]
	},
	{
		id: "skillswap",
		name: "SkillSwap",
		type: "app",
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
			github: "",
			report: "",
			slides: ""
		},
		details: "/project/skillswap",
		keyFeatures: [
			"Marketplace for freelancers to offer services and trade skills.",
			"Service listing and portfolio management for freelancers.",
			"Booking system for direct orders from users.",
			"Skill-swapping feature for freelancers to exchange services.",
			"Review system for users to provide feedback on services.",
			"User-friendly interface for seamless navigation.",
			"Responsive design for optimal viewing on various devices.",
		],
		date: "Feb - Apr 2024",
		category: "web / full-stack",
		sites: [
		]
	},
	{
		id: "ovalevolution",
		name: "Oval Evolution",
		type: "app",
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
			github: "",
			report: "",
			slides: ""
		},
		details: "/project/ovalevolution",
		keyFeatures: [
			"Online menu ordering system for restaurants.",
			"Order management and tracking for restaurant staff.",
			"Payment processing integration with PayPal API.",
			"Customer feedback collection for service improvement.",
			"User-friendly interface for easy navigation.",
			"Real-time order updates for customers and staff.",
			"Responsive design for optimal viewing on various devices.",
			"Customizable menu options for restaurants.",
			"Secure user authentication and data protection.",
			
		],
		date: "May - Aug 2023",
		category: "web / full-stack",
		sites: [

		]
	},
	{
		id: "smartfurnituresg",
		name: "Smart Furniture SG",
		type: "product",
		images: [smartsgImg],
		description: "Furniture e-commerce platform",
		fullDescription: "Smart Furniture SG is a furniture e-commerce platform designed to offer a wide range of furniture products. The project focused heavily on system design, involving the evaluation and planning of key features to be included in the application. It encompassed the development of UML diagrams such as use case diagrams, class diagrams, and sequence diagrams, alongside the definition of detailed business requirements for each application feature — serving as a critical planning phase before development. The platform supports three user roles: users, sellers, and admins. Users can browse and purchase furniture; sellers manage their shops and utilize promotional tools such as live streaming and ad purchases; while admins oversee system operations and daily platform management.",
		stack: [
			{ name: "Requirement Analysis" },
			{ name: "Product Development Planning" },
			{ name: "Feature Prioritization" },
			{ name: "Use Case Modeling" },
			{ name: "UML Design" },
			{ name: "Entity-Relationship Modeling (ERD)" },
			{ name: "System Architecture" },
			{ name: "Business Requirements Documentation" },
			{ name: "Wireframes" },
			{ name: "UI/UX Design" },
			{ name: "Technical Documentation" },
			{ name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
		],
		link: {
			github: "",
			report: "https://docs.google.com/document/d/1UK20Evbm2YDwGrimBiXvNHj7GcCMMTTzfdV6Ny6xN1U/edit?usp=sharing",
			slides: ""
		},
		details: "/project/smartfurnituresg",
		keyFeatures: [
			"Designed and architected a comprehensive system design for a furniture e-commerce platform.",
			"Developed UML diagrams including use case, class, and sequence diagrams to visualize system interactions.",
			"Created an entity-relationship diagram (ERD) to define the database structure and relationships.",
			"Documented business requirements for each application feature to ensure clarity and alignment.",
			"Prioritized features based on user needs and business goals to guide development.",
			"Designed wireframes and UI/UX elements to enhance user experience and interface design.",
			"Utilized Figma for collaborative design and prototyping, enabling real-time feedback and iteration.",
			"Conducted requirement analysis to identify key functionalities and user stories for the application.",
			"Created a product development roadmap to outline the timeline and milestones for feature implementation.",
		],
		date: "Aug - Nov 2023",
		category: "Product / System Design",
		sites: [

		]
	},
	{
		id: "merlionairline",
		name: "Merlion Airline",
		type: "app",
		images: [merlionImg],
		description: "Flight reservation system",
		fullDescription: "Merlion Airline is a comprehensive backend flight reservation system that allows users to search for flights, book tickets, and manage their reservations. The system supports two user roles: bookers and airline staff. Staff members can manage flight schedules, while bookers can search for available flights and make reservations. Designed to simulate real-world airline operations, the system supports returning and direct flights, multiple seat classes, dynamic pricing, different aircraft types, multiple airlines, seat selection, and mock payment history. Staff members can also create new aircraft, define aircraft types, configure available seat classes, set class-specific pricing, and manage full flight schedules. Built with extensibility and scalability in mind, the system is structured to support future enhancements and additional feature development.",
		stack: [
			{ name: "Java EE", logo: javaImg },
			{ name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
		],
		link: {
			github: "",
			report: "",
			slides: ""
		},
		details: "/project/merlionairline",
		keyFeatures: [
			"Implemented a flight reservation system with two user roles: bookers and airline staff.",
			"Developed a backend system using Java EE and MySQL for robust data management.",
			"Enabled users to search for flights, book tickets, and manage their reservations seamlessly.",
			"Designed a mock payment history system to simulate real-world financial transactions.",
			"Created a dynamic pricing model based on seat classes and aircraft types.",
			"Built an admin portal for airline staff to manage flight schedules, aircraft types, and seat configurations.",
			"Supported booking for both returning and direct flights across multiple airlines.",
			"Integrated seat selection functionality during the booking process for an enhanced user experience.",
		  ],
		date: "Aug - Nov 2023",
		category: "Backend Development",
		sites: [

		]
	},
	{
		id: "shelfserve",
		name: "ShelfServe",
		type: "product",
		images: [shelfserveImg, shelfserveImg2],
		description: "Smart Stock Management for Hospitals",
		fullDescription: "ShelfServe is a smart weight sensor system designed to help healthcare professionals manage inventory with real-time stock monitoring and automated threshold alerts. It features a user-friendly software interface that enables easy access to actionable data, empowering healthcare teams to make informed, timely inventory decisions.",
		stack: [
			{ name: "Product Requirements Gathering" },
			{ name: "Product Management" },
			{ name: "Problem Identification" },
			{ name: "Market Research & Analysis" },
			{ name: "Competitive Analysis" },
			{ name: "Business Model Canvas" },
			{ name: "Product Roadmap Planning" },
			{ name: "Go-To-Market (GTM) Strategy" },
			{ name: "Financial Forecasting" },
			{ name: "User Stories" },
			{ name: "User Flows" },
			{ name: "Wireframes" },
			{ name: "Prototyping" },
			{ name: "UI/UX Design" },
			{ name: "Technical Documentation" },
			{ name: "Stakeholder Interviewing" },
		],
		link: {
			report: "https://docs.google.com/document/d/1Ujh0TMP2kdQJwXth5fpYJKnQuHh7_1JbP8xxQmGkQSI/edit?usp=sharing",
			slides: "https://www.canva.com/design/DAGlqmDNBwQ/muSJvduGinTJ6CE7N-Ok6g/edit?utm_content=DAGlqmDNBwQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
			figma: "https://www.figma.com/design/zYntj5xq1fAlKUv0jN3R23/IS4262-Wireframes?node-id=19-63&t=PB1e5irZ2trqnm3v-1"
		},
		details: "/project/shelfserve",
		keyFeatures: [
			"Identified a critical inventory management problem in healthcare through stakeholder interviews.",
			"Designed a scalable hardware-software solution using weight sensors for real-time stock monitoring.",
			"Developed a business model including projected breakeven analysis by Q3 2026.",
			"Conducted market research and competitor analysis to position ShelfServe against RFID alternatives.",
			"Created a product roadmap and milestone planning for a 12-month pilot and rollout strategy.",
			"Forecasted revenue growth leading to a projected $36 million revenue by 2030.",
			"Drafted user journey flows and wireframes for the management dashboard using Figma.",
			"Formulated a go-to-market strategy targeting mid-sized hospitals and clinics initially."
		],
		date: "Jan - Apr 2025",
		category: "Product",
		sites: [

		]
	},
	{
		id: "timchat",
		name: "TimChat",
		type: "app",
		images: [timchatImg],
		description: "A simple chat application",
		fullDescription: "TimChat is a real-time chat application that allows users to send and receive messages instantly utilizing Socket.IO. It features secure authentication using JWT and bcrypt for password hashing, and offers a user-friendly, responsive interface built with modern web technologies to ensure an interactive experience.",
		stack: [
			{ name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
			{ name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
			{ name: "Socket.IO", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
			{ name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
			{ name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
			{ name: "DaisyUI", logo: "https://img.daisyui.com/images/daisyui/mark-rotating.svg" },
			{ name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
			{ name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
			{ name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
			{ name: "Cloudinary", logo: cloudinaryImg },
		],
		link: {
			github: "https://github.com/timothyhfusanto/TimChat",
		},
		details: "/project/timchat",
		keyFeatures: [
			"Real-time messaging with Socket.IO for instant communication.",
			"Secure authentication using JWT and bcrypt for password hashing.",
			"Responsive design for seamless use across devices.",
			"User-friendly interface built with React and Tailwind CSS.",
			"Image upload functionality powered by Cloudinary.",
			"Customizable themes using DaisyUI for a personalized experience."
		],
		date: "Dec - Jan 2025",
		category: "Web / full-stack",
		sites: [
			{ name: "TimChat", link: "https://timchat.vercel.app/" },
		]
	},
];

export const projects = notSorted
	.slice()
	.sort((a, b) => {
		const aParts = a.date.split(' ');
		const bParts = b.date.split(' ');

		const aEndMonth = aParts[2];
		const aYear = aParts[3];

		const bEndMonth = bParts[2];
		const bYear = bParts[3];

		const monthToNumber = (month) => {
			const months = [
				"Jan", "Feb", "Mar", "Apr", "May", "Jun",
				"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
			];
			return months.indexOf(month);
		};

		const aDate = new Date(Number(aYear), monthToNumber(aEndMonth));
		const bDate = new Date(Number(bYear), monthToNumber(bEndMonth));

		return bDate - aDate; // sort from newest to oldest
	});


