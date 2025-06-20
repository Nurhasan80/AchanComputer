 // toogle hamburger menu Star
  function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
  }

  function toggleSubmenu(li) {
    if (window.innerWidth <= 768) {
      li.classList.toggle("active");
    }
  }
 //togglevhamburge menu End 
  
  
 //slide show image astar 
  const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      showSlide(index + 1);
    }

    function prevSlide() {
      showSlide(index - 1);
    }

    setInterval(nextSlide, 5000);
  
  // slide shoe image End
  
  
  //foto galery
  
  const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');

    document.querySelectorAll('.gallery img').forEach(img => {
      img.addEventListener('click', () => {
        overlay.style.display = 'flex';
        overlayImage.src = img.src.replace('300x200', '800x600'); // Atau pakai ukuran besar sebenarnya
      });
    });

    function closeOverlay() {
      overlay.style.display = 'none';
    }

    // Tutup overlay saat klik di luar gambar
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay || e.target.classList.contains('overlay-close')) {
        closeOverlay();
      }
    });
  
  //foto galery End
  
 // form kontak Star
  document.getElementById('waForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const nama = document.getElementById('nama').value.trim();
      const telepon = document.getElementById('telepon').value.trim();
      const pesan = document.getElementById('pesan').value.trim();

      const nomorWA = '6287781935781'; // Ganti dengan nomor penjual tanpa "+" dan tanpa spasi

      const url = `https://wa.me/${nomorWA}?text=Halo%20Admin%20Achan%20Computer%2C%0ASaya%20${encodeURIComponent(nama)}%0ATelp%3A%20${encodeURIComponent(telepon)}%0APesan%3A%20${encodeURIComponent(pesan)}`;
      
      window.open(url, '_blank');
    });
   // Form kontak End





let isDark = false;
    const btn = document.getElementById('themeToggle');
    const icon = () => isDark ? 'sun' : 'moon';

    function updateIcon() {
      btn.innerHTML = `<i data-feather="${icon()}"></i>`;
      feather.replace(); // re-render Feather icon
    }

    btn.addEventListener('click', () => {
      isDark = !isDark;
      document.body.classList.toggle('dark-mode', isDark);
      updateIcon();
    });

    // Initial icon render
    feather.replace();


// animasi box icon Star
  const boxIcon= new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.icon-box').forEach(wrapper => {
  boxIcon.observe(wrapper);
  
});
// animasi icon box End

// animasi galery Star
  const galery= new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.image').forEach(wrapper => {
  galery.observe(wrapper);
  
});
// animasi galery End

// animasi layanan kami Star
  const service= new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.service-item').forEach(wrapper => {
  galery.observe(wrapper);
  
});
// animasi service End



