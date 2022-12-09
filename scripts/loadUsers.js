function getUsers(){
	let url = 'https://jsonplaceholder.typicode.com/users';

	return fetch(url).then(response => response.json());
}

function onSuccess(msg){
	let data = '<table>';
	data += "<tr><td>id</td><td>name</td><td>username</td><td>email</td></tr>";
	for(let product of msg){
		data += '<tr>';
		data += '<td>' + product.id + "</td>";
		data += '<td>' + product.name + "</td>";
		data += '<td>' + product.username + "</td>";
		data += '<td>' + product.email + "</td>";
		data += '</tr>';
	}
	data += '</table>';
	document.getElementById('content').innerHTML = data;
	document.body.classList.add('loaded');
}

function onReject(){
	document.getElementById('content').innerHTML = '⚠ Что-то пошло не так';
	document.body.classList.add('loaded');
}




