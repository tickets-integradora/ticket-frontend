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
				<span>${ticket.empleado_responsable}</span>
			</div>
			<div class="reporter-text">Autor</div>
			<div class="reporter">
				<span>${ticket.reportador}</span>
			</div>
		</div>
		<div class="container__description">
			<h2>Descripción</h2>
			<div>${ticket.descripcion}</div>
		</div>
		<div class="container__buttons">
			<button onclick="deleteTicket('${ticket.numero_ticket}')" class="chip delete">Delete</button>
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

const deleteTicket = (idTicket) => {
	console.log('delete', idTicket);
	const db = firebase.firestore();
	db.collection('Tickets')
		.doc(idTicket)
		.delete()
		.then(() => {
			console.log('Document successfully deleted!');
			closeTicket();
			location.reload();
		})
		.catch((error) => {
			console.error('Error removing document: ', error);
		});
};

const editTicket = async (tickets, id) => {
	const ticket = await getTicket(tickets, id, true);
	const sideTicket = document.querySelector('.home__ticketMenu');
	console.log(ticket);
	let ticketTemplate = `
	<div class="home__ticketMenu--container">
		<h1 class="container__title">Ticket ID #${ticket.numero_ticket.slice(0, 10)}</h1>
		<a class="close-button" onclick="closeTicket()"><span class="material-icons">close</span></a>
		<div class="container__grid">
			<h1 id="priority">Prioridad</h1>
			<h1 id="status">Estado</h1>
			<h1 id="department">Departamento</h1>
			<select onchange="changeOption('prioritys')" id="prioritys" selected="${ticket.gravedad}">
			</select>
			<select onchange="changeOption('statuses')" id="statuses"  value="${ticket.status}">
			</select>
			<select onchange="changeOption('departments')" id="departments" >
			</select>
		</div>
		<hr>
		<div class="container__dates">
			<div>Fecha de creación</div>
			<input type="date" id="creation_date" name="trip-start"
      				value="${new Date(ticket.fecha_creacion).toDateInputValue()}"
       				>
			<div>Fecha de vencimiento</div>
			<input type="date" id="due_date" name="trip-start"
      				value="${new Date(ticket.fecha_vencimiento).toDateInputValue()}"
       				>
		</div>
		<hr>
		<div class="container__users">
			<div class="responsible-text">Responsable</div>
			<div class="responsible">
				<select id="SelectResponsible">
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
				</select>
			</div>
			<div class="reporter-text">Autor</div>
			<div class="reporter">
				<select id="SelectReporter">
				</select>
			</div>
		</div>
		<div class="container__description">
			<h2>Descripción</h2>
			<textarea id="description-info">${ticket.descripcion}</textarea>
		</div>
		<div class="container__buttons">
			<button onclick="deleteTicket('${ticket.numero_ticket}')" class="chip delete">Delete</button>
			<button onclick="saveTicket('edit', '${ticket.numero_ticket}')" class="chip save">save</button>
		</div>
	</div>
	`;
	sideTicket.innerHTML = ticketTemplate;
	fillSelect('Departamentos', 'departments', ticket.departamento);
	fillSelect('Prioridad', 'prioritys', ticket.gravedad);
	fillSelect('Estados', 'statuses', ticket.status);
	createSelectOptions(ticket.reportador, 'SelectReporter', ticket.reportador);
	const creation_date = document.getElementById('creation_date');
	const due_date = document.getElementById('due_date');
	creation_date.addEventListener('change', saveValue);
	due_date.addEventListener('change', saveValue);
};

const saveTicket = async (ticketType, numero_ticket) => {
	let ticketData = {
		fecha_creacion: await new Date(document.getElementById('creation_date').value).toISOString(),
		fecha_vencimiento: await new Date(document.getElementById('due_date').value).toISOString(),
		gravedad: await document.getElementById('prioritys').value,
		descripcion: await document.getElementById('description-info').value,
		departamento: await document.getElementById('departments').value,
		empleado_responsable: await document.getElementById('SelectResponsible').value,
		reportador: await document.getElementById('SelectReporter').value,
		status: await document.getElementById('statuses').value,
	};
	console.log(ticketData);
	console.log({ticketType, numero_ticket});
	const db = firebase.firestore();
	if (ticketType == 'edit') {
		db.collection('Tickets')
			.doc(numero_ticket)
			.set(ticketData)
			.then((docRef) => {
				console.log('Document written with ID: ', docRef);
				closeTicket();
				location.reload();
			})
			.catch((error) => {
				console.error('Error adding document: ', error);
			});
	} else {
		db.collection('Tickets')
			.add(ticketData)
			.then((docRef) => {
				console.log('Document written with ID: ', docRef);
				closeTicket();
				location.reload();
			})
			.catch((error) => {
				console.error('Error adding document: ', error);
			});
	}
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

const fillSelect = (collectionName, idName, selectedId) => {
	getData(collectionName).then((resp) => {
		createSelectOptions(resp, idName, selectedId);
	});
};

const createSelectOptions = (resp, idName, selectedId) => {
	let array = resp;
	let select = document.getElementById(idName);
	if (typeof resp !== 'string') {
		for (const item of array) {
			let option = document.createElement('option');
			option.value = item.id;
			option.innerHTML = item.id;
			if (option.value == selectedId) {
				option.selected = true;
			}
			select.appendChild(option);
		}
	} else {
		let option = document.createElement('option');
		option.value = resp;
		option.innerHTML = resp;
		if (option.value == selectedId) {
			option.selected = true;
		}
		select.appendChild(option);
	}
};

const changeOption = (selectId) => {
	let value = document.getElementById(selectId);
	// console.log(value);
};

const saveValue = (e) => {
	let date = new Date(e.target.value).toISOString();
	// console.log(date);
};

Date.prototype.toDateInputValue = function () {
	let local = new Date(this);
	local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
	return local.toJSON().slice(0, 10);
	// new Date().toDateInputValue()
};

const createTicket = async () => {
	const sideTicket = document.querySelector('.home__ticketMenu');
	console.log(sideTicket);
	let ticketTemplate = `
	<div class="home__ticketMenu--container">
		<h1 class="container__title">Nuevo Ticket</h1>
		<a class="close-button" onclick="closeTicket()"><span class="material-icons">close</span></a>
		<div class="container__grid">
			<h1 id="priority">Prioridad</h1>
			<h1 id="status">Estado</h1>
			<h1 id="department">Departamento</h1>
			<select onchange="changeOption('prioritys')" id="prioritys">
			</select>
			<select onchange="changeOption('statuses')" id="statuses">
			</select>
			<select onchange="changeOption('departments')" id="departments" >
			</select>
		</div>
		<hr>
		<div class="container__dates">
			<div>Fecha de creación</div>
			<input type="date" id="creation_date" name="trip-start"
					min="${new Date().toDateInputValue()}"
	  				value="${new Date().toDateInputValue()}"
	   				>
			<div>Fecha de vencimiento</div>
			<input type="date" id="due_date" name="trip-start"
	  				value="${new Date().toDateInputValue()}"
	   				>
		</div>
		<hr>
		<div class="container__users">
			<div class="responsible-text">Responsable</div>
			<div class="responsible">
				<select id="SelectResponsible">
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
				</select>
			</div>
			<div class="reporter-text">Autor</div>
			<div class="reporter">
				<select id="SelectReporter">
				</select>
			</div>
		</div>
		<div class="container__description">
			<h2>Descripción</h2>
			<textarea id="description-info"></textarea>
		</div>
		<div class="container__buttons">
			<button onclick="saveTicket()" class="chip save">save</button>
		</div>
	</div>
	`;
	toggleTicket();
	sideTicket.innerHTML = ticketTemplate;
	fillSelect('Departamentos', 'departments');
	fillSelect('Prioridad', 'prioritys');
	fillSelect('Estados', 'statuses');
	createSelectOptions(sessionStorage.getItem('user.name'), 'SelectReporter', sessionStorage.getItem('user.name'));
};
