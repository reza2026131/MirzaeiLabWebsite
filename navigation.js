document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = Array.from(document.querySelectorAll(".dropdown"));

    const closeDropdowns = (except = null) => {
        dropdowns.forEach((dropdown) => {
            if (dropdown === except) return;
            dropdown.classList.remove("is-open");
            dropdown.querySelector(".dropbtn")?.setAttribute("aria-expanded", "false");
        });
    };

    dropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector(".dropbtn");
        const menu = dropdown.querySelector(".dropdown-content");

        if (!button || !menu) return;

        button.setAttribute("aria-haspopup", "true");
        button.setAttribute("aria-expanded", "false");

        button.addEventListener("click", (event) => {
            event.preventDefault();
            const willOpen = !dropdown.classList.contains("is-open");
            closeDropdowns(dropdown);
            dropdown.classList.toggle("is-open", willOpen);
            button.setAttribute("aria-expanded", String(willOpen));
        });
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".dropdown")) closeDropdowns();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        closeDropdowns();
        document.querySelector(".dropbtn:focus")?.blur();
    });
});
