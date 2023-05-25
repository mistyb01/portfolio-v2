

const sectionObserver = new IntersectionObserver((sections)=>{
    
    sections.forEach(section => {
        if (document.documentElement.clientWidth <= 768) {
            section.target.classList.add("active");
        } else {
            if (section.isIntersecting) {
                section.target.classList.add("active");
            } else {
                section.target.classList.remove("active");
            }
        }
    })
}, {threshold: 0.25})

// note! padding is included in each section, which can make the threshold misleading 

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

// ^ not ideal.. i want a lower threshold, w/o having multiple links highlighted at once

// idea: links have a different threshold than the sections?
// like, for a link to be highlighted, that needs a 0.5 threshold 
// (so only one is highlighted at a time!)
// but the sections toggling their active class should have a lower threshold, like 0.25

document.querySelectorAll('.container').forEach((i) => {
    if (i) {
        sectionObserver.observe(i);
        sectionObserverForLinks.observe(i);
    }
})

