document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const accordionItem = this.parentElement;
            const accordionContent = this.nextElementSibling;
            const allAccordionItems = document.querySelectorAll(".accordion-item");

            // Fechar todas as bandejas antes de abrir a atual
            allAccordionItems.forEach(item => {
                if (item !== accordionItem && item.classList.contains("active")) {
                    item.classList.remove("active");
                    item.querySelector(".accordion-content").style.maxHeight = 0;
                }
            });

            // Toggle the active class on the accordion item
            accordionItem.classList.toggle("active");

            // Toggle the display of the accordion content
            if (accordionItem.classList.contains("active")) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });
});
