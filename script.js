// there are two observers, bc sections and links need different thresholds..
// but there may be a better way to do this!

const sectionObserver = new IntersectionObserver((sections)=>{
    sections.forEach(section => {
        if (document.documentElement.clientWidth <= 768) {
            section.target.classList.add("active");
        } else {
            if (section.isIntersecting) {
                section.target.classList.add("active");
            } 
        }
    })
}, {threshold: 0.25})

// note! padding is included in each section, which can make the threshold misleading ..
// ( should probably find a better way to space out sections.. )

const sectionObserverForLinks = new IntersectionObserver((sections)=>{
    sections.forEach(section => {
            let sectionId = section.target.getAttribute("id");
            let sectionLink = document.getElementById(`${sectionId}-link`);
            if (section.isIntersecting) {
                sectionLink.classList.add("highlight");
            } else {
                // section.target.classList.remove("active");
                sectionLink.classList.remove("highlight");
            }
    })
}, {threshold: 0.5})

document.querySelectorAll('.container').forEach((i) => {
    if (i) {
        sectionObserver.observe(i);
        sectionObserverForLinks.observe(i);
    }
})

