let holding = true

document.addEventListener('DOMContentLoaded', () => {
    const holdButton = document.getElementById('hold-button');
    holdButton.style.backgroundColor = '#ffcc00'
    holdButton.addEventListener('click', () => {
        if (holdButton.style.backgroundColor != 'rgb(255, 204, 0)') {
            holding = true
            holdButton.style.backgroundColor = '#ffcc00'
        } else {
            holding = false
            holdButton.style.backgroundColor = '#fff'
        } 
    });
  });

document.addEventListener('keydown', (event) => {
    const pressedKey = event.key.toLowerCase(); // Get the lowercase key name to match the key IDs in HTML
  
    const keyElement = document.getElementById(pressedKey);
    if (pressedKey == 'shift') {
        const lshift = document.getElementById('lshift')
        const rshift = document.getElementById('rshift')
        
        if (holding) {
            lshift.classList.add('active');
            rshift.classList.add('active');
        } else if (!holding) {
            lshift.classList.add('active');
            rshift.classList.add('active');
            setTimeout(() => {
                lshift.classList.remove('active');
                rshift.classList.remove('active');
            }, 100);
        }

    } else if (pressedKey == 'control') {
        const lctrl = document.getElementById('lctrl')
        const rctrl = document.getElementById('rctrl')

        if (holding) {
            lctrl.classList.add('active');
            rctrl.classList.add('active');
        } else if (!holding) {
            lctrl.classList.add('active');
            rctrl.classList.add('active');
            setTimeout(() => {
                lctrl.classList.remove('active');
                rctrl.classList.remove('active');
            }, 100);
        }
    } else if (pressedKey == 'os') {
        const lwin = document.getElementById('lwin')
        const rwin = document.getElementById('rwin')

        if (holding) {
            lwin.classList.add('active');
            rwin.classList.add('active');
        } else if (!holding) {
            lwin.classList.add('active');
            rwin.classList.add('active');
            setTimeout(() => {
                lwin.classList.remove('active');
                rwin.classList.remove('active');
            }, 100);
        }
    } else if (pressedKey == 'alt') {
        const lalt = document.getElementById('lalt')
        const ralt = document.getElementById('ralt')

        if (holding) {
            lalt.classList.add('active');
            ralt.classList.add('active');
        } else if (!holding) {
            lalt.classList.add('active');
            ralt.classList.add('active');
            setTimeout(() => {
                lalt.classList.remove('active');
                ralt.classList.remove('active');
            }, 100);
        }
    } else if (pressedKey == ' ') {
        const space = document.getElementById('space')

        if (holding) {
            space.classList.add('active');
        } else if (!holding) {
            space.classList.add('active');
            setTimeout(() => {
                space.classList.remove('active');
            }, 100);
        }
    } else if (keyElement) {
        if (holding) {
            keyElement.classList.add('active');
        } else if (!holding) {
            keyElement.classList.add('active');
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 100);
    }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', () => {
      const activeKeys = document.querySelectorAll('.active');
      activeKeys.forEach((key) => {
        key.classList.remove('active');
      });
    });
  });
