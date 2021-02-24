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
