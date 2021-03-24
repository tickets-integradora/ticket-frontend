import getStyles from '../../../controller/utils/getStyles.js';
const Error404 = () => {
	getStyles('error404');
	const view = `
        <div class="Error404">
            <h2>Error 404: Not found</h2><img src="https://img.icons8.com/color/100/000000/not-bad-meme.png"/>
        </div>
    `;
	return view;
};

export default Error404;
