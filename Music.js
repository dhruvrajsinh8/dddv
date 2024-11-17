// Audio Playback and Controls
const audioElement = new Audio();
let currentAudioId = null;

const playButtons = document.querySelectorAll('.audio');
playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const audioId = button.id;
        playPauseSong(audioId);
    });
});

function playPauseSong(id) {
    let songFile = "";
    switch (id) {
        case '1': songFile = 'Bol Do Na Zara.mp3'; break;
        case '2': songFile = 'Ghungroo.mp3'; break;
        case '3': songFile = 'Main Rang Sharbaton Ka.mp3'; break;
        case '4': songFile = 'Barsaat.mp3'; break;
        case '5': songFile = 'Paniyon Sa.mp3'; break;
    }

    if (currentAudioId === id && !audioElement.paused) {
        audioElement.pause();
        document.getElementById(id).classList.replace('fa-circle-pause', 'fa-circle-play');
        return;
    }

    audioElement.src = songFile;
    audioElement.play();
    currentAudioId = id;
    document.getElementById(id).classList.replace('fa-circle-play', 'fa-circle-pause');
    updateUIForSong(songFile);
}

function updateUIForSong(songFile) {
    document.getElementById('songName').textContent = songFile.split('.')[0];
    document.getElementById('gif').style.opacity = 1;
}

// Handle Seek Bar
document.getElementById('range').addEventListener('input', (e) => {
    const seekTime = (e.target.value / 100) * audioElement.duration;
    audioElement.currentTime = seekTime;
});

audioElement.addEventListener('timeupdate', () => {
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    document.getElementById('range').value = progress;
});

// Handle Play/Pause Button (Master button)
document.getElementById('masterBtn').addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
        document.getElementById('masterBtn').classList.replace('fa-circle-play', 'fa-circle-pause');
    } else {
        audioElement.pause();
        document.getElementById('masterBtn').classList.replace('fa-circle-pause', 'fa-circle-play');
    }
});
// Initialize particles.js for dynamic background
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 40,
          "size_min": 0.1
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        }
      }
    },
    "retina_detect": true
  });
  
  // Implement music visualizer (Optional, use with audio source)
  // This is a placeholder for audio visualizer functionality
  // Here you can add your JavaScript logic for audio-based visualizations
  
