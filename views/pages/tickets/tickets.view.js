import getStyles from '../../../controller/utils/getStyles.js';
import getData from '../../../controller/utils/getData.js';
import getDate from '../../../controller/utils/getDate.js';
import getPriorityColor from '../../../controller/utils/getPriorityColor.js';
import getCurrentUser from '../../../controller/utils/getCurrentUser.js';

const Tickets = async () => {
	let tickets = await getData('Tickets');
	window.tickets = tickets;
	const openTickets = tickets.filter((ticket) => {
		return ticket.status === 'abierto';
	});
	const closedTickets = tickets.filter((ticket) => {
		return ticket.status === 'cerrado';
	});
	const inProgressTickets = tickets.filter((ticket) => {
		return ticket.status === 'en progreso';
	});
	const currentUser = getCurrentUser();
	getStyles('tickets');
	const view = `
	<section class="home">
			<div class="home__ticketMenu animate__animated animate__fadeInLeft">
			</div>
			<nav class="home__header">
				<div class="home__header--tabs">
					<button class="tabs__button active-tab open" onclick="openTab(event, 'open')">Abiertos</button>
					<button class="tabs__button in_progress" onclick="openTab(event, 'in_progress')">En progreso</button>
					<button class="tabs__button closed" onclick="openTab(event, 'closed')">Cerrados</button>
				</div>
				<button class="home__header--button">Crear ticket</button>
				<div class="home__header--searchbar">
					<input type="text" placeholder="Buscar" />
				</div>
				<div class="home__header--name">${currentUser.displayName}</div>
				<a class="home__header--user" onclick="dropdownMenu()">
					<img
						src="${currentUser.photoURL}"
						alt="${currentUser.displayName || currentUser.email} image"
					>
					<ul class="home__header--dropdown">
						<li><a onclick="logOut()">Cerrar sesión</a></li>
					</ul>
				</a>
			</nav>
			<section class="home__tickets">
				<div class="home__tickets--headers">
					<h4>Gravedad</h4>
					<h4>Descripcion</h4>
					<h4>Departamento</h4>
					<h4>Responsable</h4>
					<h4>Autor</h4>
					<h4>Fecha de vencimiento</h4>
				</div>
				<div class="home__tickets--content">
				<div id="open" class="tickets__tab" style="display: block">
				${openTickets
					.map((ticket) => {
						let ticketTemplate = `
							<a class="tickets__tab--ticket" onclick="getTicket(tickets, '${ticket.numero_ticket}')">
								<div class="chip priority ${getPriorityColor(ticket.gravedad)}">${ticket.gravedad}</div>
								<div class="ticket__text">${ticket.descripcion}</div>
								<div class="chip department">${ticket.departamento}</div>
								<div class="responsible">
									<img class="user"
										src="${ticket.imagen_empleado_responsable}"
										alt="imagen de ${ticket.empleado_responsable}"
									>
									<span>${ticket.empleado_responsable}</span>
								</div>
								<div class="reporter">
									<img class="user"
										src="${ticket.imagen_reportador}"
										alt="imagen de ${ticket.reportador}"
									>
									<span>${ticket.reportador}</span>
								</div>
								<div class="ticket__text">${getDate(ticket.fecha_vencimiento)}</div>
							</a>
						`;
						return ticketTemplate;
					})
					.join('')}
				</div>
				<div id="in_progress" class="tickets__tab" style="display: none">
				${inProgressTickets
					.map(
						(ticket) => `
					<a class="tickets__tab--ticket"  onclick="getTicket(tickets, '${ticket.numero_ticket}')">
						<div class="chip priority ${getPriorityColor(ticket.gravedad)}">${ticket.gravedad}</div>
						<div class="ticket__text">${ticket.descripcion}</div>
						<div class="chip department">${ticket.departamento}</div>
						<div class="responsible">
							<img class="user"
								src="${ticket.imagen_empleado_responsable}"
								alt="imagen de ${ticket.empleado_responsable}"
							>
							<span>${ticket.empleado_responsable}</span>
						</div>
						<div class="reporter">
							<img class="user"
								src="${ticket.imagen_reportador}"
								alt="imagen de ${ticket.reportador}"
							>
							<span>${ticket.reportador}</span>
						</div>
						<div class="ticket__text">${getDate(ticket.fecha_vencimiento)}</div>
					</a>
				`
					)
					.join('')}
				</div>
				<div id="closed" class="tickets__tab" style="display: none">
				${closedTickets
					.map(
						(ticket) => `
					<a class="tickets__tab--ticket"  onclick="getTicket(tickets, '${ticket.numero_ticket}')">
						<div class="chip priority ${getPriorityColor(ticket.gravedad)} ">${ticket.gravedad}</div>
						<div class="ticket__text">${ticket.descripcion}</div>
						<div class="chip department">${ticket.departamento}</div>
						<div class="responsible">
							<img class="user"
								src="${ticket.imagen_empleado_responsable}"
								alt="imagen de ${ticket.empleado_responsable}"
							>
							<span>${ticket.empleado_responsable}</span>
						</div>
						<div class="reporter">
							<img class="user"
								src="${ticket.imagen_reportador}"
								alt="imagen de ${ticket.reportador}"
							>
							<span>${ticket.reportador}</span>
						</div>
						<div class="ticket__text">${getDate(ticket.fecha_vencimiento)}</div>
					</a>
				`
					)
					.join('')}
				</div></div>
			</section>
		</section>
	`;
	return view;
};

export default Tickets;
