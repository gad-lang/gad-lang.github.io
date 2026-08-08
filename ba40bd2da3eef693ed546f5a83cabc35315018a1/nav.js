(function(){
var body=document.body;
function set(id,on){var b=document.getElementById(id);if(b)b.setAttribute("aria-expanded",on?"true":"false")}
function closeAll(){body.classList.remove("sidebar-open","menu-open");set("sidebarToggle",false);set("menuToggle",false)}
function bind(btnId,cls,otherBtn,otherCls){var b=document.getElementById(btnId);if(!b)return;b.addEventListener("click",function(e){e.stopPropagation();body.classList.remove(otherCls);set(otherBtn,false);var on=body.classList.toggle(cls);set(btnId,on)})}
bind("sidebarToggle","sidebar-open","menuToggle","menu-open");
bind("menuToggle","menu-open","sidebarToggle","sidebar-open");
var bd=document.getElementById("navBackdrop");if(bd)bd.addEventListener("click",closeAll);
function closeOnLink(id){var el=document.getElementById(id);if(el)el.addEventListener("click",function(e){if(e.target.closest("a"))closeAll()})}
closeOnLink("sidebar");closeOnLink("headerLinks");
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeAll()});
document.addEventListener("click",function(e){if(!body.classList.contains("menu-open"))return;var h=document.getElementById("headerLinks"),m=document.getElementById("menuToggle");if(h&&!h.contains(e.target)&&m&&!m.contains(e.target))closeAll()});
window.addEventListener("resize",function(){if(window.innerWidth>980)closeAll()});
})();