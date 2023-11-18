document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll(".content section");
    var sidebarLinks = document.querySelectorAll(".sideBar a");

    window.addEventListener("scroll", function () {
        var currentSection = "";

        sections.forEach(function (section) {
            var sectionTop = section.offsetTop -20; // Adjust this value as needed

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