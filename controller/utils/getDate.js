const getDate = (value) => new Date(value).toUTCString().split(' ').splice(0, 4).join(' ');
export default getDate;
