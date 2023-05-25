

const sectionObserver = new IntersectionObserver((sections)=>{
    
    sections.forEach(section => {
        if (document.documentElement.clientWidth <= 768) {
            section.target.classList.add("active");
        } else {
            let sectionId = section.target.getAttribute("id");
            let sectionLink = document.getElementById(`${sectionId}-link`);
            if (section.isIntersecting) {
                section.target.classList.add("active");
                sectionLink.classList.add("highlight");
            } else {
                section.target.classList.remove("active");
                sectionLink.classList.remove("highlight");
            }
        }
    })
}, {threshold: 0.5})

// apply an observer to every 'entry' section

document.querySelectorAll('.container').forEach((i) => {
    if (i) {
        sectionObserver.observe(i);
    }
})

