const dropdownMenu = () => {
	const dropdown = document.querySelector('.home__header--dropdown');
	dropdown.classList.toggle('menu-active');
};

const openTab = (event, section_ticket) => {
	const tickets_tabs = document.getElementsByClassName('tickets__tab');
	const links = document.getElementsByClassName('tabs__button');
	const activeClass = `active-tab`;
	for (let index = 0; index < tickets_tabs.length; index++) {
		tickets_tabs[index].style.display = 'none';
		links[index].className = links[index].className.replace(activeClass, '');
	}
	document.getElementById(section_ticket).style.display = 'block';
	event.currentTarget.classList.add(activeClass);
	event.currentTarget.classList.add(section_ticket);
};

const getTicket = (tickets, index, isEdit) => {
	const ticketFound = tickets.find((ticket) => ticket.numero_ticket == index);
	toggleTicket();
	if (!isEdit) {
		fillTicket(ticketFound);
	} else {
		return ticketFound;
	}
};

const toggleTicket = () => {
	const sideTicket = document.querySelector('.home__ticketMenu');
	sideTicket.classList.remove('animate__fadeOutLeft');
	sideTicket.classList.add('animate__fadeInLeft');
	sideTicket.classList.add('active');
};

const fillTicket = (ticket) => {
	const sideTicket = document.querySelector('.home__ticketMenu');
	let ticketTemplate = `
	<div class="home__ticketMenu--container">
		<h1 class="container__title">Ticket ID #${ticket.numero_ticket.slice(0, 10)}</h1>
		<a class="close-button" onclick="closeTicket()"><span class="material-icons">close</span></a>
		<div class="container__grid">
			<h1 id="priority">Prioridad</h1>
			<h1 id="status">Estado</h1>
			<h1 id="department">Departamento</h1>
			<div id="priorityChip" class="chip priority ${getPriorityColor(ticket.gravedad)}">${ticket.gravedad}</div>
			<div id="statusChip" class="chip priority  ${getPriorityColor(ticket.status)}"">${ticket.status}</div>
			<div id="departmentChip" class="chip department">${ticket.departamento}</div>
		</div>
		<hr>
		<div class="container__dates">
			<div>Fecha de creación</div>
			<div class="ticket-date">${getDate(ticket.fecha_creacion)}</div>
			<div>Fecha de vencimiento</div>
			<div class="ticket-date">${getDate(ticket.fecha_vencimiento)}</div>
		</div>
		<hr>
		<div class="container__users">
			<div class="responsible-text">Responsable</div>
			<div class="responsible">
				<img class="user"
					src="${ticket.imagen_empleado_responsable}"
					alt="imagen de ${ticket.empleado_responsable}"
				>
				<span>${ticket.empleado_responsable}</span>
			</div>
			<div class="reporter-text">Autor</div>
			<div class="reporter">
				<img class="user"
					src="${ticket.imagen_reportador}"
					alt="imagen de ${ticket.reportador}"
				>
				<span>${ticket.reportador}</span>
			</div>
		</div>
		<div class="container__description">
			<h2>Descripción</h2>
			<div>${ticket.descripcion}</div>
		</div>
		<div class="container__buttons">
			<button onclick="deleteTicket()" class="chip delete">Delete</button>
			<button onclick="editTicket(tickets, '${ticket.numero_ticket}')" class="chip edit">edit</button>
		</div>
	</div>
	`;
	sideTicket.innerHTML = ticketTemplate;
};

const closeTicket = () => {
	const sideTicket = document.querySelector('.home__ticketMenu');
	sideTicket.classList.remove('animate__fadeInLeft');
	sideTicket.classList.add('animate__fadeOutLeft');
};

const getPriorityColor = (priority) => {
	switch (priority) {
		case 'alta':
			return 'red';
		case 'mediana':
			return 'yellow';
		case 'baja':
			return 'green';
		case 'abierto':
			return 'green';
		case 'en progreso':
			return 'yellow';
		case 'cerrado':
			return 'red';
		default:
			break;
	}
};

const getDate = (value) => new Date(value).toUTCString().split(' ').splice(0, 4).join(' ');

const deleteTicket = () => {};

const editTicket = async (tickets, id) => {
	const ticket = await getTicket(tickets, id, true);
	const sideTicket = document.querySelector('.home__ticketMenu');
	let ticketTemplate = `
	<div class="home__ticketMenu--container">
		<h1 class="container__title">Ticket ID #${ticket.numero_ticket.slice(0, 10)}</h1>
		<a class="close-button" onclick="closeTicket()"><span class="material-icons">close</span></a>
		<div class="container__grid">
			<h1 id="priority">Prioridad</h1>
			<h1 id="status">Estado</h1>
			<h1 id="department">Departamento</h1>
			<select onchange="changeOption('prioritys')" id="prioritys">
			</select>
			<select onchange="changeOption('statuses')" id="statuses">
			</select>
			<select onchange="changeOption('departments')" id="departments">
			</select>
		</div>
		<hr>
		<div class="container__dates">
			<div>Fecha de creación</div>
			<select name="cars" id="cars">
			<option value="volvo">Volvo</option>
			  <option value="saab">Saab</option>
		</select>
			<div>Fecha de vencimiento</div>
			<select name="cars" id="cars">
			<option value="volvo">Volvo</option>
			  <option value="saab">Saab</option>
		</select>
		</div>
		<hr>
		<div class="container__users">
			<div class="responsible-text">Responsable</div>
			<div class="responsible">
			<select name="cars" id="cars">
			<option value="volvo">Volvo</option>
			  <option value="saab">Saab</option>
		</select>
			</div>
			<div class="reporter-text">Autor</div>
			<div class="reporter">
			<select name="cars" id="cars">
			<option value="volvo">Volvo</option>
			  <option value="saab">Saab</option>
		</select>
			</div>
		</div>
		<div class="container__description">
			<h2>Descripción</h2>
			<textarea>${ticket.descripcion}</textarea>
		</div>
		<div class="container__buttons">
			<button onclick="deleteTicket()" class="chip delete">Delete</button>
			<button onclick="saveTicket()" class="chip save">save</button>
		</div>
	</div>
	`;
	sideTicket.innerHTML = ticketTemplate;
	fillSelect('Departamentos', 'departments');
	fillSelect('Prioridad', 'prioritys');
	fillSelect('Estados', 'statuses');
};

const saveTicket = () => {
	closeTicket();
};

const logOut = () => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			sessionStorage.removeItem('user.name');
			sessionStorage.removeItem('user.email');
			sessionStorage.removeItem('user.photo');
			window.location.href = `${location.pathname}#/login`;
		})
		.catch((error) => {
			console.error(error);
		});
};

const getData = (collectionName) => {
	const db = firebase.firestore();
	return new Promise((resolve, reject) => {
		db.collection(collectionName).onSnapshot(
			(collection) => {
				let docs = collection.docs;
				let resp = docs.map((map) => {
					return map.data();
				});
				resolve(resp);
			},
			(error) => {
				reject(error);
			}
		);
	});
};

const fillSelect = (collectionName, idName) => {
	getData(collectionName).then((resp) => {
		createSelectOptions(resp, idName);
	});
};

const createSelectOptions = (resp, idName) => {
	let array = resp;
	let select = document.getElementById(idName);
	for (const item of array) {
		let option = document.createElement('option');
		option.value = item.id;
		option.innerHTML = item.nombre;
		select.appendChild(option);
	}
};

const changeOption = (selectId) => {
	let value = document.getElementById(selectId);
	console.log(value);
};
