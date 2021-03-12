const getPriorityColor = (priority) => {
	switch (priority) {
		case 'alta':
			return 'red';
		case 'mediana':
			return 'yellow';
		case 'baja':
			return 'green';

		default:
			break;
	}
};

export default getPriorityColor;
