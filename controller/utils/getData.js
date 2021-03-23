const db = firebase.firestore();

const getData = async (name) => {
	return new Promise((resolve, reject) => {
		db.collection(name).onSnapshot(
			(collection) => {
				let docs = collection.docs;
				let resp = docs.map((map) => {
					let response = {};
					response = map.data();
					response.numero_ticket = map.id;
					return response;
				});
				resolve(resp);
			},
			(error) => {
				reject(error);
			}
		);
	});
};

export default getData;
