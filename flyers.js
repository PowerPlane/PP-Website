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

  // PLANES - Add image filenames here (SVG, PNG, JPG, etc.)
  // The script will randomly pick one each time
  planes: [
    'plane-basic.png',
    // 'plane-motor.svg',
    // 'plane-propeller.svg',
  ],

  // SIZE - Width in pixels (height auto-scales)
  size: 50,
  mobileSize: 35,           // Smaller on mobile
  mobileBreakpoint: 600,    // Screen width in px

  // TIMING
  delay: 1000,       // ms before first plane (3s)
  gap: 1000,         // ms after plane disappears until next (3s)
  duration: 10000,   // ms flight time (35s) - must match CSS

};

// ============================================================
// LOGIC - No need to edit below
// ============================================================

(function () {
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

  function getPointOnEdge(edge, vw, vh, offset) {
    switch (edge) {
      case 'top':
        return { x: Math.random() * vw, y: -offset };
      case 'bottom':
        return { x: Math.random() * vw, y: vh + offset };
      case 'left':
        return { x: -offset, y: Math.random() * vh };
      case 'right':
        return { x: vw + offset, y: Math.random() * vh };
    }
  }

  function getRandomPath() {
    // Start from left or right only
    var startEdges = ['left', 'right'];
    var startEdge = startEdges[Math.floor(Math.random() * 2)];

    // End on any edge except start
    var allEdges = ['top', 'bottom', 'left', 'right'];
    var endEdges = allEdges.filter(function (e) { return e !== startEdge; });
    var endEdge = endEdges[Math.floor(Math.random() * 3)];

    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var offset = 60;

    var start = getPointOnEdge(startEdge, vw, vh, offset);
    var end = getPointOnEdge(endEdge, vw, vh, offset);

    // Calculate angle so plane faces direction of travel
    var angle = Math.atan2(end.y - start.y, end.x - start.x) * (180 / Math.PI);

    return {
      startX: start.x + 'px',
      startY: start.y + 'px',
      endX: end.x + 'px',
      endY: end.y + 'px',
      angle: angle + 'deg'
    };
  }

  function createPlane() {
    var src = getRandomPlane();
    if (!src) {
      // No planes configured, but keep chain alive
      setTimeout(createPlane, CONFIG.gap);
      return;
    }

    var img = document.createElement('img');
    img.src = src;
    img.className = 'flyer';
    img.style.width = getSize() + 'px';
    img.alt = '';
    img.setAttribute('aria-hidden', 'true');

    // Set random flight path
    var path = getRandomPath();
    img.style.setProperty('--start-x', path.startX);
    img.style.setProperty('--start-y', path.startY);
    img.style.setProperty('--end-x', path.endX);
    img.style.setProperty('--end-y', path.endY);
    img.style.setProperty('--angle', path.angle);

    // Handle load errors - keep chain alive!
    img.onerror = function () {
      console.warn('Flyer: Failed to load', src);
      this.remove();
      setTimeout(createPlane, CONFIG.gap);
    };

    document.body.appendChild(img);

    // Remove after animation, then spawn next
    setTimeout(function () {
      if (img.parentNode) img.remove();
      setTimeout(createPlane, CONFIG.gap);
    }, CONFIG.duration + 1000);
  }

  function init() {
    setTimeout(createPlane, CONFIG.delay);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
