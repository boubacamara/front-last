const render = () => {
    const sidenavEl = document.querySelectorAll('.sidenav');
    const sidenavInst = M.Sidenav.init(sidenavEl);

    const userDropEl = document.querySelectorAll('.dropdown-trigger');
    const userDropInst = M.Dropdown.init(userDropEl, {
        hover: true,
        coverTrigger: false
    });

    const datepickerEl = document.querySelectorAll('.datepicker');
    const datepickerInst = M.Datepicker.init(datepickerEl, {
        format: 'yyyy-mm-dd',
        setDefaultDate: true,
        i18n: {
            months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            monthsShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"],
            weekdays: ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            weekdaysShort: ["Dim","Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            weekdaysAbbrev: ["D","L", "M", "M", "J", "V", "S"]
        }
    })
}

document.addEventListener("DOMContentLoaded", render);