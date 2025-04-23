import chioImg from '../assets/chio.png';
import ovalImg from '../assets/oval.png';
import skillswapImg from '../assets/skillswap.png';

export const projects = [
	{
		id: "chio",
		name: "Chio - Beauty Lifestyle App",
		image: chioImg,
		description: "A social-commerce mobile platform for the beauty & lifestyle industry.",
		stack: ["React", "React Native", "Expo", "NestJS", "MongoDB", "Stripe", "Socket.IO", "Nivo", "Antd", "Tailwind CSS", "Gluestack UI", "Google Analytics 4"],
		link: "https://github.com/yourusername/chio",
		details: "/project/chio",
	},
	{
		id: "skillswap",
		name: "SkillSwap - Freelancer Marketplace",
		image: skillswapImg,
		description: "A marketplace for freelancers to trade their offered skills.",
		stack: ["Django", "Python", "MySQL", "Bootstrap", "jQuery"],
		link: "https://github.com/yourusername/shelfserve",
		details: "/project/skillswap",
	},
	{
		id: "ovalevolution",
		name: "OvalEvolution - One-stop customer service platform",
		image: ovalImg,
		description: "An online menu ordering system for restaurants to streamline their operations.",
		stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery", "HTML", "CSS", "Blade"],
		link: "https://github.com/yourusername/shelfserve",
		details: "/project/ovalevolution",
	},
];