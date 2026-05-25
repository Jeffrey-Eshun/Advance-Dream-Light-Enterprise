//HOME
window.addEventListener('scroll', function() {
      document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 50);
    });
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-in').forEach(function(el) { obs.observe(el); });

//ABOUT
window.addEventListener('scroll', function() {
      document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 50);
    });
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-in').forEach(function(el) { obs.observe(el); });

//SERVICES
window.addEventListener('scroll', function() {
      document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 50);
    });
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-in').forEach(function(el) { obs.observe(el); });

//CONTACT
window.addEventListener('scroll', function() {
      document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 50);
    });
    function submitForm() {
      var name = document.getElementById('fname').value.trim();
      var email = document.getElementById('femail').value.trim();
      var msg = document.getElementById('fmessage').value.trim();
      if (!name || !email || !msg) { alert('Please fill in your name, email, and message.'); return; }
      var btn = document.querySelector('.btn-send');
      btn.textContent = 'Sending...'; btn.disabled = true;
      setTimeout(function() {
        ['fname','femail','fphone','fmodel','fmessage'].forEach(function(id) { document.getElementById(id).value = ''; });
        document.getElementById('ftype').value = '';
        document.getElementById('fbrand').value = '';
        btn.innerHTML = 'Send Message <i class="bi bi-arrow-right ms-2"></i>'; btn.disabled = false;
        var s = document.getElementById('successMsg');
        s.style.display = 'block'; setTimeout(function() { s.style.display = 'none'; }, 5000);
      }, 1500);
    }

//GALLERY
 // Navbar scroll
    window.addEventListener('scroll', function() {
      document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 50);
    });

    // Filter logic
    var filterBtns = document.querySelectorAll('.filter-btn');
    var items = document.querySelectorAll('.gallery-item');
    var noResults = document.getElementById('noResults');

    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        filterBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        var visible = 0;
        items.forEach(function(item) {
          var cat = item.getAttribute('data-category');
          if (filter === 'all' || cat === filter) {
            item.classList.remove('hidden');
            visible++;
          } else {
            item.classList.add('hidden');
          }
        });
        noResults.style.display = visible === 0 ? 'block' : 'none';
      });
    });

    // Lightbox logic
    var lightbox = document.getElementById('lightbox');
    var lbImg = document.getElementById('lbImg');
    var lbCaption = document.getElementById('lbCaption');
    var currentIdx = 0;
    var visibleItems = [];

    function openLightbox(idx) {
      visibleItems = Array.from(items).filter(function(i) { return !i.classList.contains('hidden'); });
      currentIdx = idx;
      updateLightbox();
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function updateLightbox() {
      var item = visibleItems[currentIdx];
      lbImg.src = item.querySelector('img').src;
      lbImg.alt = item.querySelector('img').alt;
      lbCaption.textContent = item.getAttribute('data-caption');
    }

    items.forEach(function(item, i) {
      item.addEventListener('click', function() {
        var vis = Array.from(items).filter(function(it) { return !it.classList.contains('hidden'); });
        var vidx = vis.indexOf(item);
        openLightbox(vidx);
      });
    });

    document.getElementById('lbClose').addEventListener('click', function() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    });
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
    });
    document.getElementById('lbPrev').addEventListener('click', function(e) {
      e.stopPropagation();
      currentIdx = (currentIdx - 1 + visibleItems.length) % visibleItems.length;
      updateLightbox();
    });
    document.getElementById('lbNext').addEventListener('click', function(e) {
      e.stopPropagation();
      currentIdx = (currentIdx + 1) % visibleItems.length;
      updateLightbox();
    });
    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
      if (e.key === 'ArrowLeft') { currentIdx = (currentIdx - 1 + visibleItems.length) % visibleItems.length; updateLightbox(); }
      if (e.key === 'ArrowRight') { currentIdx = (currentIdx + 1) % visibleItems.length; updateLightbox(); }
    });

    // Fade-in observer
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.fade-in').forEach(function(el) { obs.observe(el); });