document.querySelector('#submit').addEventListener('click',function(){	
	let numero = document.querySelector('#numero').value;
    let direccion = document.querySelector('#direccion').value;
    let gustos = document.querySelector('#gustos').value;

    let url = "https://api.whatsapp.com/send?phone=542215229589&text=" + numero + "%0A" + direccion + "%0A" + gustos;
    window.open(url)
});
