const render = () => {

    const sidenavEl = document.querySelectorAll('.sidenav');
    const sidenavInst = M.Sidenav.init(sidenavEl);

    const userDropEl = document.querySelectorAll('.dropdown-trigger');
    const userDropInst = M.Dropdown.init(userDropEl, {
        hover: true,
        coverTrigger: false
    });

    
}

document.addEventListener("DOMContentLoaded", render);