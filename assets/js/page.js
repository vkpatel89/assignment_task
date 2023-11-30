 const pageObj = {
    handleHamburger: function(){
        const hamburger = document.getElementById('hamburgerIcon'),
              menu = document.getElementById('mainMenu');  
        hamburger.addEventListener('click', function(){
            this.classList.toggle('active');
            menu.classList.toggle('active'); 
        })
    }
 }

 window.onload = function () {
    pageObj.handleHamburger();
  }
  