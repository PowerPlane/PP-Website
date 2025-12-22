/**
 * Flying Paper Planes
 *
 * ALL SETTINGS ARE IN THE CONFIG OBJECT BELOW
 * No need to edit anything else in this file.
 */

// ============================================================
// CONFIG - Edit everything here
// ============================================================

var CONFIG = {

  // PLANES - Add your SVG filenames here
  // The script will randomly pick one each time
  planes: [
    'plane-basic.svg',
    // 'plane-motor.svg',
    // 'plane-propeller.svg',
  ],

  // SIZE - Width in pixels (height auto-scales)
  size: 50,
  mobileSize: 35,           // Smaller on mobile
  mobileBreakpoint: 600,    // Screen width in px

  // TIMING
  delay: 3000,       // ms before first plane (3s)
  interval: 45000,   // ms between planes (45s)
  duration: 35000,   // ms flight time (35s) - must match CSS

};

// ============================================================
// LOGIC - No need to edit below
// ============================================================

(function() {
  'use strict';

  function getRandomPlane() {
    if (CONFIG.planes.length === 0) return null;
    var index = Math.floor(Math.random() * CONFIG.planes.length);
    return 'images/' + CONFIG.planes[index];
  }

  function getSize() {
    // Use mobile size on small screens
    var isMobile = window.innerWidth < CONFIG.mobileBreakpoint;
    return isMobile ? CONFIG.mobileSize : CONFIG.size;
  }

  function createPlane() {
    var src = getRandomPlane();
    if (!src) return;

    var img = document.createElement('img');
    img.src = src;
    img.className = 'flyer';
    img.style.width = getSize() + 'px';
    img.alt = '';
    img.setAttribute('aria-hidden', 'true');

    // Handle load errors gracefully
    img.onerror = function() {
      console.warn('Flyer: Failed to load', src);
      this.remove();
    };

    document.body.appendChild(img);

    // Remove after animation completes
    setTimeout(function() {
      if (img.parentNode) img.remove();
    }, CONFIG.duration + 1000);
  }

  function init() {
    setTimeout(function() {
      createPlane();
      setInterval(createPlane, CONFIG.interval);
    }, CONFIG.delay);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
