//js for the bars to show the dropdown menu
const toggleBtn=document.querySelector('.toggle');
const toggleIcon=document.querySelector('.toggle i');
const dropdown=document.querySelector('.dropdown');

toggleBtn.onclick=function(){
    dropdown.classList.toggle('open');
    const isOPen=dropdown.classList.contains('open');
    toggleIcon.classList =isOPen?'fa-solid fa-xmark':'fa-solid fa-bars';
}

