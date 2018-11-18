window.onload = function(){
	var nav = document.getElementById('navhook');
	var btn = document.getElementById('showNavHook');
	btn.onclick= function() {
        nav.classList.toggle('active');
	}
}