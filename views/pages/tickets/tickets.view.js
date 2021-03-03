import getStyles from '../../../controller/utils/getStyles.js';

const Tickets = () => {
	getStyles('tickets');
	const view = `
    <section class="home">
			<nav class="home__header">
				<div class="home__header--tabs">
					<button class="tabs__button active-tab open" onclick="openTab(event, 'open')">Open</button>
					<button class="tabs__button in_progress" onclick="openTab(event, 'in_progress')">In progress</button>
					<button class="tabs__button closed" onclick="openTab(event, 'closed')">Closed</button>
				</div>
				<button class="home__header--button">Create ticket</button>
				<div class="home__header--searchbar">
					<input type="text" placeholder="Search" />
				</div>
				<a class="home__header--user" onclick="dropdownMenu()">
					<img
						src="https://picsum.photos/200"
						alt="user image"
					>
					<ul class="home__header--dropdown">
						<li><a href="#/login">Log out</a></li>
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
					<a class="tickets__tab--ticket" href="#">
						<div class="chip priority">high</div>
						<div class="ticket__text">Falta limpiar la sala...</div>
						<div class="chip department">Limpieza</div>
						<img class="user"
						src="https://picsum.photos/200"
						alt="user image"
						>
						<img class="user"
						src="https://picsum.photos/200"
						alt="user image"
						>
						<div class="ticket__text">21 de marzo 2021</div>
					</a>
					<a class="tickets__tab--ticket" href="#">
						<div class="chip priority">high</div>
						<div class="ticket__text">Falta limpiar la sala...</div>
						<div class="chip department">Limpieza</div>
						<img class="user"
						src="https://picsum.photos/200"
						alt="user image"
						>
						<img class="user"
						src="https://picsum.photos/200"
						alt="user image"
						>
						<div class="ticket__text">21 de marzo 2021</div>
					</a>
				</div>
				<div id="in_progress" class="tickets__tab" style="display: none">
					<a class="tickets__tab--ticket" href="#">Ticket in progress</a>
					<a class="tickets__tab--ticket" href="#">Ticket in progress</a>
					<a class="tickets__tab--ticket" href="#">Ticket in progress</a>
					<a class="tickets__tab--ticket" href="#">Ticket in progress</a>
					<a class="tickets__tab--ticket" href="#">Ticket in progress</a>
					<a class="tickets__tab--ticket" href="#">Ticket in progress</a>
				</div>
				<div id="closed" class="tickets__tab" style="display: none">
					<a class="tickets__tab--ticket" href="#">Ticket closed</a>
					<a class="tickets__tab--ticket" href="#">Ticket closed</a>
					<a class="tickets__tab--ticket" href="#">Ticket closed</a>
				</div></div>
			</section>
		</section>
    `;

	return view;
};

export default Tickets;
