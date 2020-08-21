
var btn = document.querySelectorAll('.tab_btn');
var tab_content = document.querySelectorAll('.content');

function dispalyNone() {
	for(var i = 0; i < tab_content.length; i++){
		tab_content[i].style.display = 'none';
		btn[i].style.backgroundColor = '';
		btn[i].style.color = '#f9f9f9';
	}
}

function showOne(){
	dispalyNone();
	tab_content[0].style.display = 'block';
	btn[0].style.backgroundColor = '#f9f9f9';
	btn[0].style.color = '#222';
}
showOne();

for(let a = 0; a < btn.length; a++){
	btn[a].addEventListener('click', function(){
		dispalyNone();
		tab_content[a].style.display = 'block';
		btn[a].style.backgroundColor = '#f9f9f9';
		btn[a].style.color = '#222';
	});
}