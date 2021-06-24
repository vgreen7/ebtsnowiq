const root = document.querySelector('#root');
const target = document.querySelectorAll('section');
const io_options = {
  root: root,
  rootMargin: '0px',
  threshold: [...Array(100).keys()].map(x => x / 100)
};

let io_observer;

function io_callback (entries) {
  entries.forEach(function(entry){
    const ratio = entry.intersectionRatio;
    id = entry.target.getAttribute('id').toLowerCase();
    if (ratio > 0) {
      document.querySelector(`a[href="#${id}"]`).parentElement.classList.add('active');
    }
    else {
      document.querySelector(`a[href="#${id}"]`).parentElement.classList.remove('active');
    }
  });

};

function changePlatform () {
  const platform = "-"+document.getElementById("platform").value;
  platform = platform.replace("default","");

  images = document.querySelectorAll('img');
  for(i=0; i< images.length; i++){
    images[i].src = images[i].src.replace(".png","").replace("-android","").replace("-ios","")+platform+".png";
  };
};

io_observer = new IntersectionObserver(io_callback, io_options);
for(i =0; i < target.length; i++){
  io_observer.observe(target[i]);
}

