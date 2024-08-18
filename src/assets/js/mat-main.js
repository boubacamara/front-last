const render = () => {
    const sidenavEl = document.querySelectorAll('.sidenav');
    const sidenavInst = M.Sidenav.init(sidenavEl);

    const tabsEl = document.querySelectorAll('.tabs');
    const tabsInst = M.Tabs.init(tabsEl);

    const modalEl = document.querySelectorAll('.modal');
    const modalInst = M.Modal.init(modalEl);

    const userDropEl = document.querySelectorAll('.dropdown-trigger');
    const userDropInst = M.Dropdown.init(userDropEl, {
        hover: true,
        coverTrigger: false
    });

    
}

document.addEventListener("DOMContentLoaded", render);