const pageObj = {
    menuExpand: function (element) {
        // this function is handling menu and search bar expand behaviour on small devices
        element.addEventListener('click', function () {
            const id = this.id;
            this.classList.toggle('active');
            const menu = document.querySelector('[data-id="' + id + '"]')
            menu.classList.toggle('active');
            if (this.classList.contains('active')) {
                this.setAttribute('aria-expanded', true);
                document.querySelector('body').classList.add('menu-opened');
            }
            else {
                this.setAttribute('aria-expanded', false);
                document.querySelector('body').classList.remove('menu-opened');
            }
        })
    },
    activeMenu: function () {
        // this function is handling active menu status on side nav links
        const menusItems = document.querySelectorAll('.secondary-menu-link');
        menusItems.forEach(function (menu) {
            menu.addEventListener('click', function () {
                menusItems.forEach(function (link) {
                    link.classList.remove('active');
                })
                this.classList.add('active');
            })
        })
    },
    dateTime: function () {
        setInterval(function () {
            const date = new Date();
            let str = date.toLocaleString();
            const timeStr = str.split(',')
            const time = timeStr[1].trim().split(' ')
            const timeStamp = time[1];
            const hr = time[0].split(':')[0]
            const min = time[0].split(':')[1]
            // console.log('time', hr, min , timeStamp)
            const timespan = document.querySelector('.time-span'),
                timeAmPm = document.querySelector('.time-am-pm');
            timespan.innerHTML = `${hr}:${min}`;
            timeAmPm.innerHTML = timeStamp;

            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const day = days[date.getDay()],
                month = months[date.getMonth()],
                year = date.getFullYear();
            const dateElement = document.querySelector('.date-wrapper');
            dateElement.innerHTML = `${day}, ${month} ${year}`
        }, 1000) 
    },
    backToTop: function () {
        const btn = document.querySelector(".back-to-top");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
        btn.addEventListener('click', function () {
            window.scroll({ top: 0, behavior: "smooth" })
        })
    }

}

window.onload = function () {
    pageObj.menuExpand(document.getElementById('headerProfileIcon'));
    pageObj.menuExpand(document.getElementById('hamburgerIcon'));
    pageObj.menuExpand(document.getElementById('searchButton'));
    pageObj.activeMenu();
    pageObj.dateTime();
}
window.onscroll = function () {
    pageObj.backToTop();
};
$(function () {
    $("#datepicker").datepicker();
});