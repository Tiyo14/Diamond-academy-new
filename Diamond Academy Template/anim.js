    //basic variables
    const canva = document.querySelector('canvas');
    canva.width = window.innerWidth;
    canva.height = window.innerHeight;
    const c = canva.getContext('2d');
    const actBtnA = document.getElementsByClassName('day');
    const actBtnB = document.getElementsByClassName('night');
    let randInte
    let inc = 0.01;
    let bgColor = '#7FEDDF'

    function dayTime() {
        bgColor = '#7FEDDF'; // Set color for day

        document.querySelectorAll('h1').forEach(el => {
            el.classList.remove('text-white')
        });
        document.querySelectorAll('h6').forEach(el => {
            el.classList.remove('text-white')
        });
        document.querySelectorAll('.nav-item a').forEach(el => {
            el.classList.remove('text-white')
            el.className = 'nav-link fs-4 mx-2';
        });
    }
    
    function nightTime() {
        bgColor = '#0F1A2B'; // Set color for night
    
        // Change the class name for h1 and h6 elements individually
        document.querySelectorAll('h1').forEach(el => {
            el.className = 'text-white';
        });
        document.querySelectorAll('h6').forEach(el => {
            el.className = 'text-white';
        });
        document.querySelectorAll('.nav-item a').forEach(el => {
            el.className = 'text-white nav-link fs-4 mx-2';
        });
    }

    function animate() {
    requestAnimationFrame(animate);
    canva.width = window.innerWidth;
    if (parseFloat(window.getComputedStyle(document.body).minHeight) > 820) {
        canva.height = window.innerHeight + parseFloat(window.getComputedStyle(document.body).minHeight);
    } else {
        canva.height = window.innerHeight;
    }
    c.clearRect(0, 0, canva.width, canva.height);
    c.fillStyle = bgColor; 
    c.fillRect(0, 0, canva.width, canva.height); 

    
    //sine wave drawing
    c.beginPath();
    if (parseFloat(window.getComputedStyle(document.body).minHeight) > 820) {
        c.moveTo(canva.height / 2, 0)
        for (a = 0; a < canva.height; a++) {
        c.lineTo(canva.width / 2 + Math.sin(a * 0.01 + inc) * 100 * Math.sin(inc), a)
    }
    } else {
        c.moveTo(0, canva.width / 2)
        for (a = 0; a < canva.width; a++) {
        c.lineTo(a, canva.height / 2 + Math.sin(a * 0.01 + inc) * 100 * Math.sin(inc))
    }
    }
    c.strokeStyle = '#24476C'
    c.lineWidth = 10
    c.stroke();

    inc += 0.01

    }
    animate();