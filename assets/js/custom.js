window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    console.log("!");
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`a[href="#${id}"]`).parentElement.classList.add('active');
      } else {
        document.querySelector(`a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
  
});
