const sectionObserver = new IntersectionObserver((sections)=>{
    sections.forEach(section => {
        console.log("section", section);
        let sectionId = section.target.getAttribute("id");
        let sectionLink = document.getElementById(`${sectionId}-link`);
        if (section.isIntersecting) {
            console.log("intersect!")
            section.target.classList.add("active");
            sectionLink.classList.add("highlight");
        } else {
            console.log("not")
            section.target.classList.remove("active");
            sectionLink.classList.remove("highlight");
        }
    })
}, {threshold: 0.5})

// apply an observer to every 'entry' section
document.querySelectorAll('.container').forEach((i) => {
    if (i) {
        sectionObserver.observe(i);
    }
})