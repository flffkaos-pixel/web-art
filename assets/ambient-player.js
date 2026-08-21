(() => {
  const STORAGE = { volume: 'visual-gallery-volume', muted: 'visual-gallery-muted', artOnly: 'visual-gallery-art-only' };

  const readNumber = (key, fallback) => {
    const value = Number.parseFloat(localStorage.getItem(key));
    return Number.isFinite(value) ? Math.max(0, Math.min(1, value)) : fallback;
  };

  const initialize = () => {
    const controls = [...document.querySelectorAll('[data-ambient-toggle]')];
    const tracks = controls.map((button) => ({ button, audio: document.getElementById(button.dataset.ambientToggle) })).filter(({ audio }) => audio);
    const volumeSlider = document.getElementById('global-volume');
    const volumeValue = document.getElementById('volume-value');
    const muteButton = document.getElementById('mute-toggle');
    const uiButton = document.getElementById('ui-toggle');
    let volume = readNumber(STORAGE.volume, 0.44);
    let muted = localStorage.getItem(STORAGE.muted) === 'true';

    const setPlayState = (button, playing) => {
      button.classList.toggle('is-playing', playing);
      button.setAttribute('aria-pressed', String(playing));
      button.setAttribute('aria-label', playing ? '사운드 정지' : '사운드 재생');
    };

    const applyVolume = () => {
      const audibleVolume = muted ? 0 : volume;
      tracks.forEach(({ audio }) => { audio.volume = audibleVolume; });
      if (volumeSlider) volumeSlider.value = String(Math.round(volume * 100));
      if (volumeValue) volumeValue.textContent = `${Math.round(audibleVolume * 100)}%`;
      if (muteButton) {
        muteButton.classList.toggle('is-muted', muted);
        muteButton.setAttribute('aria-pressed', String(muted));
        muteButton.setAttribute('aria-label', muted ? '음소거 해제' : '전체 음소거');
        const label = muteButton.querySelector('[data-mute-label]');
        if (label) label.textContent = muted ? 'unmute' : 'mute';
      }
    };

    const stopOtherTracks = (currentButton) => {
      tracks.forEach(({ button, audio }) => {
        if (button === currentButton) return;
        if (!audio.paused) { audio.pause(); audio.currentTime = 0; }
        setPlayState(button, false);
      });
    };

    tracks.forEach(({ button, audio }) => {
      audio.loop = true;
      audio.preload = 'metadata';
      button.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (audio.paused) {
          stopOtherTracks(button);
          audio.play().then(() => setPlayState(button, true)).catch(() => setPlayState(button, false));
        } else {
          audio.pause();
          audio.currentTime = 0;
          setPlayState(button, false);
        }
      });
      button.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); button.click(); }
      });
    });

    if (volumeSlider) {
      volumeSlider.addEventListener('input', () => {
        volume = Number(volumeSlider.value) / 100;
        muted = volume === 0;
        localStorage.setItem(STORAGE.volume, String(volume));
        localStorage.setItem(STORAGE.muted, String(muted));
        applyVolume();
      });
    }
    if (muteButton) {
      muteButton.addEventListener('click', () => {
        muted = !muted;
        localStorage.setItem(STORAGE.muted, String(muted));
        applyVolume();
      });
    }
    if (uiButton) {
      const setArtOnly = (enabled) => {
        document.body.classList.toggle('art-only', enabled);
        uiButton.classList.toggle('is-active', enabled);
        uiButton.setAttribute('aria-pressed', String(enabled));
        uiButton.setAttribute('aria-label', enabled ? 'UI 다시 표시' : 'UI 숨기기');
        const label = uiButton.querySelector('[data-ui-label]');
        if (label) label.textContent = enabled ? 'show UI' : 'hide UI';
        localStorage.setItem(STORAGE.artOnly, String(enabled));
      };
      setArtOnly(localStorage.getItem(STORAGE.artOnly) === 'true');
      uiButton.addEventListener('click', () => setArtOnly(!document.body.classList.contains('art-only')));
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) tracks.forEach(({ button, audio }) => { if (!audio.paused) { audio.pause(); setPlayState(button, false); } });
    });
    applyVolume();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize);
  else initialize();
})();
