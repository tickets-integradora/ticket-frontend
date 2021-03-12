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

const getTicket = (tickets, index) => {
	const ticketFound = tickets.results.find((ticket) => ticket.numero_ticket == index);
	console.log(ticketFound);
	toggleTicket();
	fillTicket(ticketFound);
};

const toggleTicket = () => {
	const sideTicket = document.querySelector('.home__ticketMenu');
	sideTicket.classList.toggle('active');
};

const fillTicket = (ticket) => {
	const sideTicket = document.querySelector('.home__ticketMenu');
	let ticketTemplate = `
	<div class="home__ticketMenu--container">
		<h1 class="container__title">Ticket ID #${ticket.numero_ticket}</h1>
		<div class="container__grid">
			<h1 id="priority">Prioridad</h1>
			<h1 id="status">Estado</h1>
			<h1 id="department">Departamento</h1>
			<div id="priorityChip" class="chip priority">${ticket.gravedad}</div>
			<div id="statusChip" class="chip priority">${ticket.status}</div>
			<div id="departmentChip" class="chip priority">${ticket.departamento}</div>
		</div>
	</div>
	`;
	sideTicket.innerHTML = ticketTemplate;
};
