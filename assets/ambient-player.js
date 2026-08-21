(() => {
  const setState = (button, playing) => {
    button.classList.toggle('is-playing', playing);
    button.setAttribute('aria-pressed', String(playing));
    button.setAttribute('aria-label', playing ? '사운드 정지' : '사운드 재생');
    const label = button.querySelector('[data-ambient-label]');
    if (label) label.textContent = playing ? 'ambient' : 'ambient';
  };

  const initialize = () => {
    const controls = [...document.querySelectorAll('[data-ambient-toggle]')];
    controls.forEach((button) => {
      const audio = document.getElementById(button.dataset.ambientToggle);
      if (!audio) return;
      audio.loop = true;
      audio.preload = 'metadata';
      audio.volume = 0.44;

      const stopOthers = () => {
        controls.forEach((other) => {
          if (other === button) return;
          const otherAudio = document.getElementById(other.dataset.ambientToggle);
          if (otherAudio && !otherAudio.paused) {
            otherAudio.pause();
            otherAudio.currentTime = 0;
          }
          setState(other, false);
        });
      };

      const toggle = () => {
        if (audio.paused) {
          stopOthers();
          audio.play().then(() => setState(button, true)).catch(() => setState(button, false));
        } else {
          audio.pause();
          audio.currentTime = 0;
          setState(button, false);
        }
      };

      button.addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); toggle(); });
      button.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggle(); }
      });
      document.addEventListener('visibilitychange', () => {
        if (document.hidden && !audio.paused) { audio.pause(); setState(button, false); }
      });
    });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize);
  else initialize();
})();
