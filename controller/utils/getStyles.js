const getStyles = (page) => {
	const stylesLink = document.getElementById('styles');
	stylesLink.href = `./views/pages/${page}/${page}.css`;
};

export default getStyles;
