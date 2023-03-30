export function generateColorVariations(hexColor) {
	function adjustBrightness(color, amount) {
		const colorInt = parseInt(color, 16);
		const r = Math.max(0, Math.min(255, (colorInt >> 16) + amount));
		const g = Math.max(0, Math.min(255, ((colorInt >> 8) & 0x00ff) + amount));
		const b = Math.max(0, Math.min(255, (colorInt & 0x0000ff) + amount));

		return (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}

	const darkerAmount1 = -40;
	const darkerAmount2 = 80;
	const lighterAmount = darkerAmount2 * 2;

	const shortToLongForm = /^#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/;
	if (shortToLongForm.test(hexColor)) {
		hexColor = hexColor.replace(shortToLongForm, "#$1$1$2$2$3$3");
	}

	const validColor = /^#[a-fA-F0-9]{6}$/;
	if (!validColor.test(hexColor)) {
		throw new Error("Invalid hex color code");
	}

	const color = hexColor.slice(1);
	const darkerColor1 = adjustBrightness(color, darkerAmount1);
	const darkerColor2 = adjustBrightness(color, darkerAmount2);
	const lighterColor = adjustBrightness(color, lighterAmount);

	return [hexColor, `#${darkerColor1}`, `#${darkerColor2}`, `#${lighterColor}`];
}
