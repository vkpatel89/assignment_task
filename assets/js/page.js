 const pageObj = {
    menuExpand: function(element){ 
        // this function is handling menu and search bar expand behaviour on small devices
        element.addEventListener('click', function(){
            const id = this.id; 
            this.classList.toggle('active'); 
            const menu = document.querySelector('[data-id="'+ id +'"]') 
            menu.classList.toggle('active'); 
            if(this.classList.contains('active')){
                this.setAttribute('aria-expanded', true);
            }
            else{
                this.setAttribute('aria-expanded', false);
            }
        })
    },
    activeMenu: function(){
        // this function is handling active menu status on side nav links
        const menusItems = document.querySelectorAll('.secondary-menu-link');  
        menusItems.forEach(function(menu){ 
            menu.addEventListener('click', function(){ 
                menusItems.forEach(function(link){ 
                    link.classList.remove('active');
                })
                this.classList.add('active');  
            })
        })
    }
 }

 window.onload = function () {
    pageObj.menuExpand(document.getElementById('headerProfileIcon'));
    pageObj.menuExpand(document.getElementById('hamburgerIcon'));
    pageObj.menuExpand(document.getElementById('searchButton'));
    pageObj.activeMenu();
  } 