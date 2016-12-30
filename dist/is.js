'use strict';
/* global $, window, document, module, process, navigator */

// -----------------------------------------
// Functions

/**
 * Check if is browser
 * @return {boolean}
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var browser = function browser() {
  return !!(typeof window !== 'undefined');
};

/**
 * Check if is node
 * @return {boolean}
 */
var node = function node() {
  return !!(typeof module !== 'undefined' && module.exports && typeof process !== 'undefined');
};

/**
 * Is it ie?
 * @return {boolean}
 */
var ie = function ie() {
  return !!(browser() && navigator.userAgent.toLowerCase().match(/trident\/7\./));
};

/**
 * Is edge
 * @return {Boolean}
 */
var edge = function edge() {
  return !!(browser() && /edge\/\d./i.test(navigator.userAgent.toLowerCase()));
};

/**
 * Is android
 * @return {Boolean}
 */
var android = function android() {
  return !!(browser() && navigator.userAgent.toLowerCase().match(/android/));
};

/**
 * Is ios
 * @return {Boolean}
 */
var ios = function ios() {
  return !!(browser() && navigator.userAgent.toLowerCase().match(/(ipod|iphone|ipad)/));
};

/**
 * Is it mobile?
 * @return {boolean}
 */
var mobile = function mobile() {
  /* eslint-disable max-len */
  if (browser() && /Android|Tablet PC|PalmOS|PalmSource|smartphone|GT-P1000|SGH-T849|SHW-M180S|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows CE|Windows Mobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  }
  /* eslint-enable max-len */

  return false;
};

/**
 * Check if device is touch
 * @return {boolean}
 */
var touch = function touch() {
  if (browser()) {
    return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
  }

  return false;
};

/**
 * Check if media is...
 * @param {string} target
 * @return {boolean}
 */
var media = function media(target) {
  if (!browser() || typeof $ === 'undefined' || !target || target.replace(/ /g, '') === '') {
    // TODO: We should try to do without $
    return false;
  }

  var body = $('body');

  if (target === 'mobile') {
    return !!body.find('> .is-mobile').is(':visible');
  } else if (target === 'tablet') {
    return !!body.find('> .is-tablet').is(':visible');
  } else if (target === 'desktop') {
    return !body.find('> .is-mobile').is(':visible') && !body.find('> .is-tablet').is(':visible');
  } else if (target === 'over') {
    return !!body.find('> .is-over').is(':visible');
  }

  return false;
};

/**
 * Check if url is valid
 *
 * @param {string} urlTest
 * @returns {boolean}
 */
var url = function url(urlTest) {
  return !!/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(urlTest);
};

// ------------------------------------
// Export

exports.default = { node: node, browser: browser, ie: ie, edge: edge, ios: ios, android: android, mobile: mobile, touch: touch, media: media, url: url };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pcy5qcyJdLCJuYW1lcyI6WyJicm93c2VyIiwid2luZG93Iiwibm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwcm9jZXNzIiwiaWUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwiZWRnZSIsInRlc3QiLCJhbmRyb2lkIiwiaW9zIiwibW9iaWxlIiwidG91Y2giLCJtZWRpYSIsInRhcmdldCIsIiQiLCJyZXBsYWNlIiwiYm9keSIsImZpbmQiLCJpcyIsInVybCIsInVybFRlc3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFJQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVU7QUFBQSxTQUFNLENBQUMsRUFBRSxPQUFPQyxNQUFQLEtBQWtCLFdBQXBCLENBQVA7QUFBQSxDQUFoQjs7QUFFQTs7OztBQUlBLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLFNBQU0sQ0FBQyxFQUFFLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE9BQU9DLE9BQXhDLElBQW1ELE9BQU9DLE9BQVAsS0FBbUIsV0FBeEUsQ0FBUDtBQUFBLENBQWI7O0FBRUE7Ozs7QUFJQSxJQUFNQyxLQUFLLFNBQUxBLEVBQUs7QUFBQSxTQUFNLENBQUMsRUFBRU4sYUFBYU8sVUFBVUMsU0FBVixDQUFvQkMsV0FBcEIsR0FBa0NDLEtBQWxDLENBQXdDLGNBQXhDLENBQWYsQ0FBUDtBQUFBLENBQVg7O0FBRUE7Ozs7QUFJQSxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxTQUFNLENBQUMsRUFBRVgsYUFBYSxhQUFhWSxJQUFiLENBQWtCTCxVQUFVQyxTQUFWLENBQW9CQyxXQUFwQixFQUFsQixDQUFmLENBQVA7QUFBQSxDQUFiOztBQUVBOzs7O0FBSUEsSUFBTUksVUFBVSxTQUFWQSxPQUFVO0FBQUEsU0FBTSxDQUFDLEVBQUViLGFBQWFPLFVBQVVDLFNBQVYsQ0FBb0JDLFdBQXBCLEdBQWtDQyxLQUFsQyxDQUF3QyxTQUF4QyxDQUFmLENBQVA7QUFBQSxDQUFoQjs7QUFFQTs7OztBQUlBLElBQU1JLE1BQU0sU0FBTkEsR0FBTTtBQUFBLFNBQU0sQ0FBQyxFQUFFZCxhQUFhTyxVQUFVQyxTQUFWLENBQW9CQyxXQUFwQixHQUFrQ0MsS0FBbEMsQ0FBd0Msb0JBQXhDLENBQWYsQ0FBUDtBQUFBLENBQVo7O0FBRUE7Ozs7QUFJQSxJQUFNSyxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNqQjtBQUNBLE1BQUlmLGFBQWEsb01BQW9NWSxJQUFwTSxDQUF5TUwsVUFBVUMsU0FBbk4sQ0FBakIsRUFBZ1A7QUFDNU8sV0FBTyxJQUFQO0FBQ0g7QUFDRDs7QUFFQSxTQUFPLEtBQVA7QUFDSCxDQVJEOztBQVVBOzs7O0FBSUEsSUFBTVEsUUFBUSxTQUFSQSxLQUFRLEdBQU07QUFDaEIsTUFBSWhCLFNBQUosRUFBZTtBQUNYLFdBQU8sQ0FBQyxFQUFFLGtCQUFrQkMsTUFBcEIsQ0FBRCxJQUFnQyxDQUFDLEVBQUUsc0JBQXNCQSxPQUFPTSxTQUEvQixDQUF4QztBQUNIOztBQUVELFNBQU8sS0FBUDtBQUNILENBTkQ7O0FBUUE7Ozs7O0FBS0EsSUFBTVUsUUFBUSxTQUFSQSxLQUFRLENBQUNDLE1BQUQsRUFBWTtBQUN0QixNQUFJLENBQUNsQixTQUFELElBQWMsT0FBT21CLENBQVAsS0FBYSxXQUEzQixJQUEwQyxDQUFDRCxNQUEzQyxJQUFxREEsT0FBT0UsT0FBUCxDQUFlLElBQWYsRUFBcUIsRUFBckIsTUFBNkIsRUFBdEYsRUFBMEY7QUFDdEY7QUFDQSxXQUFPLEtBQVA7QUFDSDs7QUFFRCxNQUFNQyxPQUFPRixFQUFFLE1BQUYsQ0FBYjs7QUFFQSxNQUFJRCxXQUFXLFFBQWYsRUFBeUI7QUFDckIsV0FBTyxDQUFDLENBQUVHLEtBQUtDLElBQUwsQ0FBVSxjQUFWLEVBQTBCQyxFQUExQixDQUE2QixVQUE3QixDQUFWO0FBQ0gsR0FGRCxNQUVPLElBQUlMLFdBQVcsUUFBZixFQUF5QjtBQUM1QixXQUFPLENBQUMsQ0FBRUcsS0FBS0MsSUFBTCxDQUFVLGNBQVYsRUFBMEJDLEVBQTFCLENBQTZCLFVBQTdCLENBQVY7QUFDSCxHQUZNLE1BRUEsSUFBSUwsV0FBVyxTQUFmLEVBQTBCO0FBQzdCLFdBQU8sQ0FBRUcsS0FBS0MsSUFBTCxDQUFVLGNBQVYsRUFBMEJDLEVBQTFCLENBQTZCLFVBQTdCLENBQUYsSUFDQSxDQUFFRixLQUFLQyxJQUFMLENBQVUsY0FBVixFQUEwQkMsRUFBMUIsQ0FBNkIsVUFBN0IsQ0FEVDtBQUVILEdBSE0sTUFHQSxJQUFJTCxXQUFXLE1BQWYsRUFBdUI7QUFDMUIsV0FBTyxDQUFDLENBQUVHLEtBQUtDLElBQUwsQ0FBVSxZQUFWLEVBQXdCQyxFQUF4QixDQUEyQixVQUEzQixDQUFWO0FBQ0g7O0FBRUQsU0FBTyxLQUFQO0FBQ0gsQ0FwQkQ7O0FBc0JBOzs7Ozs7QUFNQSxJQUFNQyxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsT0FBRDtBQUFBLFNBQWEsQ0FBQyxDQUFFLDhFQUE4RWIsSUFBOUUsQ0FBbUZhLE9BQW5GLENBQWhCO0FBQUEsQ0FBWjs7QUFFQTtBQUNBOztrQkFFZSxFQUFFdkIsVUFBRixFQUFRRixnQkFBUixFQUFpQk0sTUFBakIsRUFBcUJLLFVBQXJCLEVBQTJCRyxRQUEzQixFQUFnQ0QsZ0JBQWhDLEVBQXlDRSxjQUF6QyxFQUFpREMsWUFBakQsRUFBd0RDLFlBQXhELEVBQStETyxRQUEvRCxFIiwiZmlsZSI6ImlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuLyogZ2xvYmFsICQsIHdpbmRvdywgZG9jdW1lbnQsIG1vZHVsZSwgcHJvY2VzcywgbmF2aWdhdG9yICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGdW5jdGlvbnNcblxuLyoqXG4gKiBDaGVjayBpZiBpcyBicm93c2VyXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5jb25zdCBicm93c2VyID0gKCkgPT4gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpO1xuXG4vKipcbiAqIENoZWNrIGlmIGlzIG5vZGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmNvbnN0IG5vZGUgPSAoKSA9PiAhISh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpO1xuXG4vKipcbiAqIElzIGl0IGllP1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgaWUgPSAoKSA9PiAhIShicm93c2VyKCkgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC90cmlkZW50XFwvN1xcLi8pKTtcblxuLyoqXG4gKiBJcyBlZGdlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5jb25zdCBlZGdlID0gKCkgPT4gISEoYnJvd3NlcigpICYmIC9lZGdlXFwvXFxkLi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKSk7XG5cbi8qKlxuICogSXMgYW5kcm9pZFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgYW5kcm9pZCA9ICgpID0+ICEhKGJyb3dzZXIoKSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FuZHJvaWQvKSk7XG5cbi8qKlxuICogSXMgaW9zXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5jb25zdCBpb3MgPSAoKSA9PiAhIShicm93c2VyKCkgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oaXBvZHxpcGhvbmV8aXBhZCkvKSk7XG5cbi8qKlxuICogSXMgaXQgbW9iaWxlP1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgbW9iaWxlID0gKCkgPT4ge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICBpZiAoYnJvd3NlcigpICYmIC9BbmRyb2lkfFRhYmxldCBQQ3xQYWxtT1N8UGFsbVNvdXJjZXxzbWFydHBob25lfEdULVAxMDAwfFNHSC1UODQ5fFNIVy1NMTgwU3x3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8QkJ8UGxheUJvb2t8SUVNb2JpbGV8V2luZG93cyBDRXxXaW5kb3dzIE1vYmlsZXxXaW5kb3dzIFBob25lfEtpbmRsZXxTaWxrfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgZGV2aWNlIGlzIHRvdWNoXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5jb25zdCB0b3VjaCA9ICgpID0+IHtcbiAgICBpZiAoYnJvd3NlcigpKSB7XG4gICAgICAgIHJldHVybiAhISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8ICEhKCdtc21heHRvdWNocG9pbnRzJyBpbiB3aW5kb3cubmF2aWdhdG9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIG1lZGlhIGlzLi4uXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5jb25zdCBtZWRpYSA9ICh0YXJnZXQpID0+IHtcbiAgICBpZiAoIWJyb3dzZXIoKSB8fCB0eXBlb2YgJCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXRhcmdldCB8fCB0YXJnZXQucmVwbGFjZSgvIC9nLCAnJykgPT09ICcnKSB7XG4gICAgICAgIC8vIFRPRE86IFdlIHNob3VsZCB0cnkgdG8gZG8gd2l0aG91dCAkXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBib2R5ID0gJCgnYm9keScpO1xuXG4gICAgaWYgKHRhcmdldCA9PT0gJ21vYmlsZScpIHtcbiAgICAgICAgcmV0dXJuICEhKGJvZHkuZmluZCgnPiAuaXMtbW9iaWxlJykuaXMoJzp2aXNpYmxlJykpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAndGFibGV0Jykge1xuICAgICAgICByZXR1cm4gISEoYm9keS5maW5kKCc+IC5pcy10YWJsZXQnKS5pcygnOnZpc2libGUnKSk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdkZXNrdG9wJykge1xuICAgICAgICByZXR1cm4gIShib2R5LmZpbmQoJz4gLmlzLW1vYmlsZScpLmlzKCc6dmlzaWJsZScpKSAmJlxuICAgICAgICAgICAgICAgIShib2R5LmZpbmQoJz4gLmlzLXRhYmxldCcpLmlzKCc6dmlzaWJsZScpKTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ292ZXInKSB7XG4gICAgICAgIHJldHVybiAhIShib2R5LmZpbmQoJz4gLmlzLW92ZXInKS5pcygnOnZpc2libGUnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB1cmwgaXMgdmFsaWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsVGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IHVybCA9ICh1cmxUZXN0KSA9PiAhISgvKGh0dHB8aHR0cHMpOlxcL1xcLyhcXHcrOnswLDF9XFx3Kik/KFxcUyspKDpbMC05XSspPyhcXC98XFwvKFtcXHcjITouPys9JiUhXFwtXFwvXSkpPy8udGVzdCh1cmxUZXN0KSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0XG5cbmV4cG9ydCBkZWZhdWx0IHsgbm9kZSwgYnJvd3NlciwgaWUsIGVkZ2UsIGlvcywgYW5kcm9pZCwgbW9iaWxlLCB0b3VjaCwgbWVkaWEsIHVybCB9O1xuIl19