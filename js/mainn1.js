var openModal = document.getElementById('open-modal');
var modal = document.getElementById('modal-1');
var closeModal = document.getElementsByClassName('close-modal')[0];
if(openModal) {
	openModal.addEventListener('click', function () {
		modal.classList.toggle('visible');
	});
}
if(closeModal) {
	closeModal.addEventListener('click', function () {
		modal.classList.remove('visible');
	});
}




var openModal2 = document.getElementById('open-modal2');
var modal2 = document.getElementById('modal-2');
if(openModal2) {
	openModal2.addEventListener('click', function () {
		modal2.classList.toggle('visible');
	});
}
var closeModal2 = document.getElementsByClassName('close-modal2')[0];
if(closeModal2) {
	closeModal2.addEventListener('click', function () {
		modal2.classList.remove('visible');
	});
}


