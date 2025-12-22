/**
 * Flying Paper Planes
 *
 * Spawns random paper plane SVGs that fly across the screen.
 * - Delayed start (8 seconds after page load)
 * - One plane at a time
 * - Random plane type and flight path
 * - New plane every 45 seconds
 */

(function() {
  'use strict';

  // Configuration - easy to adjust
  var CONFIG = {
    initialDelay: 8000,    // 8 seconds before first plane
    interval: 45000,       // 45 seconds between planes
    animationDuration: 35000  // 35 seconds flight time (matches CSS)
  };

  // Plane template IDs
  var planeIds = ['plane-propeller', 'plane-motor', 'plane-rubber'];

  // Flight path classes
  var pathClasses = ['path-1', 'path-2', 'path-3'];

  // Get container
  var container = document.getElementById('flyers-container');

  /**
   * Get a random item from an array
   */
  function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /**
   * Spawn a flying plane
   */
  function spawnPlane() {
    // Get random plane template
    var planeId = randomFrom(planeIds);
    var template = document.getElementById(planeId);

    if (!template) return;

    // Clone the SVG
    var plane = template.cloneNode(true);
    plane.removeAttribute('id');
    plane.classList.add('flyer');
    plane.classList.add(randomFrom(pathClasses));

    // Add to container
    container.appendChild(plane);

    // Remove after animation completes
    setTimeout(function() {
      if (plane.parentNode) {
        plane.parentNode.removeChild(plane);
      }
    }, CONFIG.animationDuration + 1000);
  }

  /**
   * Start the flying planes
   */
  function init() {
    // First plane after initial delay
    setTimeout(function() {
      spawnPlane();

      // Then spawn planes at regular intervals
      setInterval(spawnPlane, CONFIG.interval);
    }, CONFIG.initialDelay);
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
