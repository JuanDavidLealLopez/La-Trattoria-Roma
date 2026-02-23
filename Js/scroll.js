const revealElements = document.querySelectorAll('.reveal');


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');     // aparece
        } else {
            entry.target.classList.remove('visible');  // desaparece
        }
    });
});

revealElements.forEach(el => observer.observe(el));