// Simple fade-in on scroll using IntersectionObserver
    document.addEventListener('DOMContentLoaded', function(){
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add('show');
            // unobserve to avoid repeated triggers
            io.unobserve(entry.target);
          }
        });
      },{threshold:0.12});

      document.querySelectorAll('[data-fade]').forEach(el=>{
        el.classList.add('fade-in');
        io.observe(el);
      });

      // small keyboard shortcut to copy email: press 'c'
      window.addEventListener('keydown', (e)=>{
        if(e.key.toLowerCase() === 'c'){
          navigator.clipboard?.writeText('sarangbaraskar07@gmail.com');
          const tip = document.createElement('div');
          tip.textContent = 'Email copied to clipboard';
          tip.className = 'fixed left-1/2 -translate-x-1/2 bottom-6 bg-gray-800 text-white px-4 py-2 rounded-md shadow';
          document.body.appendChild(tip);
          setTimeout(()=> tip.remove(),1500);
        }
      });
    });