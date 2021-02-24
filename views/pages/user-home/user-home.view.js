const Tickets = () => {
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
						src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="user image"
					>
					<ul class="home__header--dropdown">
						<li><a href="#/login">Log out</a></li>
					</ul>
				</a>
			</nav>
			<section class="home__tickets">
				<div id="open" class="tickets__tab" style="display: block">
					<a class="tickets__tab--ticket" href="#">Ticket open</a>
					<a class="tickets__tab--ticket" href="#">Ticket open</a>
					<a class="tickets__tab--ticket" href="#">Ticket open</a>
				</div>
				<div id="in_progress" class="tickets__tab" style="display: none">
					<a class="tickets__tab--ticket" href="#">Ticket in progress</a>
					<a class="tickets__tab--ticket" href="#">Ticket in progress</a>
					<a class="tickets__tab--ticket" href="#">Ticket in progress</a>
				</div>
				<div id="closed" class="tickets__tab" style="display: none">
					<a class="tickets__tab--ticket" href="#">Ticket closed</a>
					<a class="tickets__tab--ticket" href="#">Ticket closed</a>
					<a class="tickets__tab--ticket" href="#">Ticket closed</a>
				</div>
			</section>
		</section>
    `;

	return view;
};

export default Tickets;
