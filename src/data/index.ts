export const SITE_TITLE = "Tristan Alba";
export const SITE_DESCRIPTION = "Documenting experiments, systems, and thinking in motion";

export interface MenuItem {
	label: string;
	url: string;
}

export const menuItems: MenuItem[] = [
	{
		label: "tristan",
		url: "/",
	},
	// {
	// 	label: "writings",
	// 	url: "/writings",
	// },
	// {
	// 	label: "thoughts",
	// 	url: "/thoughts",
	// },
	// {
	// 	label: "ships",
	// 	url: "/ships",
	// },
];

export const title = "Tristan Alba";
export const description = "Documenting experiments, systems, and thinking in motion";
export const image = "/images/ogimage.png";
export const url = "https://www.tristanalba.com";

export const ogImage = {
	src: "/images/ogimage.png",
	alt: "Tristan Alba",
};


export const products = [
	{
		name: "gamaylang",
		url: "https://gamaylang.com",
		image: "/products/fli.png",
	},
	{
		name: "wishlet.me",
		url: "https://wishlet.me",
		image: "/products/uiino.png",
	},
	{
		name: "uhaift",
		url: "https://uhaift.com",
		image: "/products/sticai.png",
	},
	// {
	// 	name: "Dun",
	// 	url: "https://dunsuite.com",
	// 	image: "/products/dun.png",
	// },
	// {
	// 	name: "DunTasks",
	// 	url: "https://duntasks.com",
	// 	image: "/products/duntasks.png",
	// },
];

export const socialLinks = [
	{
		label: "@x",
		url: "https://x.com/trstnlb?s=21",
	},
	{
		label: "email",
		url: "mailto:tristan.j.alba@gmail.com",
	},
	{
		label: "github",
		url: "https://github.com/tristanjoshuaalba",
	},
	{
		label: "linkedin",
		url: "https://www.linkedin.com/in/tristanjoshuaalba/",
	},
];
