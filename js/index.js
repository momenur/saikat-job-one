document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".content section");
    let sidebarLinks = document.querySelectorAll(".sideBar a");

    window.addEventListener("scroll", function () {
        let currentSection = "";

        sections.forEach(function (section) {
            let sectionTop = section.offsetTop -20; // Adjust this value as needed

            if (pageYOffset >= sectionTop) {
                currentSection = section.id;
            }
        });

        sidebarLinks.forEach(function (link) {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });
});