const theme = {
	colors: {
		base1: {
			content: "#000000",
			default: "#FFFFFF",
			alt: "#FFFFFF",
		},
		base2: {
			content: "#000000",
			default: "#E8E8E2",
			alt: "#E8E8E2",
		},
		base3: {
			content: "#000000",
			default: "#D6D6CB",
			alt: "#D6D6CB",
		},
		base4: {
			content: "#000000",
			default: "#C5C5B4",
			alt: "#C5C5B4",
		},
		primary: {
			content: "#FFFFFF",
			default: "#104228",
			alt: "#104228",
		},
		secondary: {
			content: "#104228",
			default: "#F5E6D3",
			alt: "#F5E6D3",
		},
		accent: {
			content: "#000000",
			default: "#FFFF69",
			alt: "#EDED78",
		},
		neutral: {
			content: "#000000",
			default: "#C5C5B4",
			alt: "#C5C5B4",
		},
		info: {
			content: "#FFFF69",
			default: "#005082",
			alt: "#0B4A71",
		},
		success: {
			content: "#FFFF69",
			default: "#46CDA0",
			alt: "#45BB94",
		},
		warning: {
			content: "#FFFF69",
			default: "#A55FD7",
			alt: "#9550C7",
		},
		danger: {
			content: "#FFFF69",
			default: "#FF6E1E",
			alt: "#E55F14",
		},
		chart1: {
			content: "#ffffff",
			default: "#343c38",
			alt: "#8C97FD",
		},
		chart2: {
			content: "#ffffff",
			default: "#73caa1",
			alt: "#b6ebda",
		},
		chart3: {
			content: "#ffffff",
			default: "#214f81",
			alt: "#abc6d6",
		},
		chart4: {
			content: "#ffffff",
			default: "#2b26a3",
			alt: "#abc6d6",
		},
		chart5: {
			content: "#ffffff",
			default: "#955ad4",
			alt: "#bfbbe2",
		},
		chart6: {
			content: "#ffffff",
			default: "#ec6e2d",
			alt: "#FEAB7C",
		},
		chart7: {
			content: "#ffffff",
			default: "#9f9f90",
			alt: "#9BED74",
		},
		chart8: {
			content: "#ffffff",
			default: "#038301",
			alt: "#69AF68",
		},
		chart9: {
			content: "#ffffff",
			default: "#004B50",
			alt: "#649DA0",
		},
		chartothers: {
			content: "#ffffff",
			default: "#000000",
			alt: "#CDCDCD",
		},
		disabled: {
			content: "#ffffff",
			default: "#BBBBBB",
			alt: "#AAAAAA",
		},
	},
	fontFamily: {
		body: ["Montserrat", "sans-serif"],
	},
	keyframes: {
		clickButton: {
			"0%,100%": { transform: "translateY(0)" },
			"25%": { transform: "translateY(2px)" },
		},
		unfold: {
			"0%": { maxHeight: "0" },
			"100%": { maxHeight: "500px" },
		},
		fold: {
			"0%": { maxHeight: "500px" },
			"100%": { maxHeight: "0" },
		},
		chartWidth: {
			"0%": { width: "0" },
			end: { width: "50px" },
		},
		toastFormBottom: {
			"0%": { bottom: "-100px" },
			"100%": { bottom: "0" },
		},
	},
	animation: {
		"button-click": "clickButton 300ms ease-in-out",
		"accordion-unfold": "unfold 500ms ease-in",
		"accordion-fold": "fold 500ms ease-out",
		"chart-horizontal": "chartWidth 500ms ease-in-out",
		"toast-from-bottom": "toastFormBottom 500ms ease-out",
	},
};

export { theme } ;