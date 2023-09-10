const container_header = document.getElementById("container");
const secondary = document.getElementById("secondary_div");
const  menuview  = document.getElementById("menuview");
const  images  = document.getElementById("images");

// user can open menu tab by pressing on this button it will hide the main header and other content sections and enables the menu tab.
function showMenu(){
    container_header.style.display='none';
    secondary.style.display='none';
    menuview.style.display='flex';
}
// this function used to close the menu (menu is only visible in mobile devicess) 
function closeMenu(){
    container_header.style.display='block';
    secondary.style.display='flex';
    menuview.style.display='none';
}
function submit(){
const name = document.getElementById("name").value;
const mail = document.getElementById("mail").value;
const t = document.getElementById("t").value;
    // if any input field is empty then it will check and print a error msg throw the alert or if it is
    // valid then it will print a thanks message
    if(name.trim()==""||mail.trim()==""||t.trim()==""){
        alert("Input field must be filled up!")
    }else{
        alert("Thanks for submitting the form!")
    }
}
// when ever user click on the Logo (Mary) this function will run and it will reload the current page
function doreload(){
    // this below function will reload the page
    window.location.reload();
}