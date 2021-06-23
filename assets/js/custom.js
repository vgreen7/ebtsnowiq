const root = document.querySelector('#root');
const target = document.querySelector('h1, h2, h3, h4, h5, h6');
const io_options = {
  root: root,
  rootMargin: '0px',
  threshold: [...Array(100).keys()].map(x => x / 100)
};

let io_observer;

function io_callback (entries) {
  console.log("2");
  entries.forEach(function(entry){
    const ratio = entry.intersectionRatio;
    id = entry.target.getAttribute('id');
    
    if (ratio > 0) {
      document.querySelector(`a[href="#${id}"]`).parentElement.classList.add('active');
    }
    else {
      document.querySelector(`a[href="#${id}"]`).parentElement.classList.remove('active');
    }
  });

};

io_observer = new IntersectionObserver(io_callback, io_options);
console.log("1");
io_observer.observe(target);