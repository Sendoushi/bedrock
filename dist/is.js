/* :: import type {Node, Browser, Ie, Edge, Ios, Android, Mobile, Touch, Media, Url} from './_test/is.flow.js'; */
'use strict';
/* global $, window, document, module, process, navigator */

/* :: import $ from 'jquery' */

// -----------------------------------------
// Functions

/**
 * Check if is browser
 * @param  {*} val
 * @return {boolean}
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
var browser /* :: :Browser */ = function browser() {
    return !!(typeof window !== 'undefined');
};

/**
 * Check if is node
 * @param  {*} val
 * @return {boolean}
 */
var node /* :: :Node */ = function node() {
    return !!(typeof module !== 'undefined' && module.exports && typeof process !== 'undefined');
};

/**
 * Is it ie?
 * @return {boolean}
 */
var ie /* :: :Ie */ = function ie() {
    return !!(browser() && navigator.userAgent.toLowerCase().match(/trident\/7\./));
};

/**
 * Is edge
 * @return {Boolean}
 */
var edge /* :: :Edge */ = function edge() {
    return !!(browser() && /edge\/\d./i.test(navigator.userAgent.toLowerCase()));
};

/**
 * Is android
 * @return {Boolean}
 */
var android /* :: :Android */ = function android() {
    return !!(browser() && navigator.userAgent.toLowerCase().match(/android/));
};

/**
 * Is ios
 * @return {Boolean}
 */
var ios /* :: :Ios */ = function ios() {
    return !!(browser() && navigator.userAgent.toLowerCase().match(/(ipod|iphone|ipad)/));
};

/**
 * Is it mobile?
 * @return {boolean}
 */
var mobile /* :: :Mobile */ = function mobile() {
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
var touch /* :: :Touch */ = function touch() {
    if (browser()) {
        return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
    }

    return false;
};

/**
 * Check if media is...
 * @return {boolean}
 */
var media /* :: :Media */ = function media(target) {
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
var url /* :: :Url */ = function url(urlTest) {
    return !!/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(urlTest);
};

// ------------------------------------
// Export

exports.default = { node: node, browser: browser, ie: ie, edge: edge, ios: ios, android: android, mobile: mobile, touch: touch, media: media, url: url };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pcy5qcyJdLCJuYW1lcyI6WyJicm93c2VyIiwid2luZG93Iiwibm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwcm9jZXNzIiwiaWUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwiZWRnZSIsInRlc3QiLCJhbmRyb2lkIiwiaW9zIiwibW9iaWxlIiwidG91Y2giLCJtZWRpYSIsInRhcmdldCIsIiQiLCJyZXBsYWNlIiwiYm9keSIsImZpbmQiLCJpcyIsInVybCIsInVybFRlc3QiXSwibWFwcGluZ3MiOiJBQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFLQSxJQUFNQSxRQUFPLGlCQUFQLEdBQTJCLFNBQTNCQSxPQUEyQjtBQUFBLFdBQU0sQ0FBQyxFQUFFLE9BQU9DLE1BQVAsS0FBa0IsV0FBcEIsQ0FBUDtBQUFBLENBQWpDOztBQUVBOzs7OztBQUtBLElBQU1DLEtBQUksY0FBSixHQUFxQixTQUFyQkEsSUFBcUI7QUFBQSxXQUFNLENBQUMsRUFBRSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxPQUFPQyxPQUF4QyxJQUFtRCxPQUFPQyxPQUFQLEtBQW1CLFdBQXhFLENBQVA7QUFBQSxDQUEzQjs7QUFFQTs7OztBQUlBLElBQU1DLEdBQUUsWUFBRixHQUFpQixTQUFqQkEsRUFBaUI7QUFBQSxXQUFNLENBQUMsRUFBRU4sYUFBYU8sVUFBVUMsU0FBVixDQUFvQkMsV0FBcEIsR0FBa0NDLEtBQWxDLENBQXdDLGNBQXhDLENBQWYsQ0FBUDtBQUFBLENBQXZCOztBQUVBOzs7O0FBSUEsSUFBTUMsS0FBSSxjQUFKLEdBQXFCLFNBQXJCQSxJQUFxQjtBQUFBLFdBQU0sQ0FBQyxFQUFFWCxhQUFhLGFBQWFZLElBQWIsQ0FBa0JMLFVBQVVDLFNBQVYsQ0FBb0JDLFdBQXBCLEVBQWxCLENBQWYsQ0FBUDtBQUFBLENBQTNCOztBQUVBOzs7O0FBSUEsSUFBTUksUUFBTyxpQkFBUCxHQUEyQixTQUEzQkEsT0FBMkI7QUFBQSxXQUFNLENBQUMsRUFBRWIsYUFBYU8sVUFBVUMsU0FBVixDQUFvQkMsV0FBcEIsR0FBa0NDLEtBQWxDLENBQXdDLFNBQXhDLENBQWYsQ0FBUDtBQUFBLENBQWpDOztBQUVBOzs7O0FBSUEsSUFBTUksSUFBRyxhQUFILEdBQW1CLFNBQW5CQSxHQUFtQjtBQUFBLFdBQU0sQ0FBQyxFQUFFZCxhQUFhTyxVQUFVQyxTQUFWLENBQW9CQyxXQUFwQixHQUFrQ0MsS0FBbEMsQ0FBd0Msb0JBQXhDLENBQWYsQ0FBUDtBQUFBLENBQXpCOztBQUVBOzs7O0FBSUEsSUFBTUssT0FBTSxnQkFBTixHQUF5QixTQUF6QkEsTUFBeUIsR0FBTTtBQUNqQztBQUNBLFFBQUlmLGFBQWEsb01BQW9NWSxJQUFwTSxDQUF5TUwsVUFBVUMsU0FBbk4sQ0FBakIsRUFBZ1A7QUFDNU8sZUFBTyxJQUFQO0FBQ0g7QUFDRDs7QUFFQSxXQUFPLEtBQVA7QUFDSCxDQVJEOztBQVVBOzs7O0FBSUEsSUFBTVEsTUFBSyxlQUFMLEdBQXVCLFNBQXZCQSxLQUF1QixHQUFNO0FBQy9CLFFBQUloQixTQUFKLEVBQWU7QUFDWCxlQUFPLENBQUMsRUFBRSxrQkFBa0JDLE1BQXBCLENBQUQsSUFBZ0MsQ0FBQyxFQUFFLHNCQUFzQkEsT0FBT00sU0FBL0IsQ0FBeEM7QUFDSDs7QUFFRCxXQUFPLEtBQVA7QUFDSCxDQU5EOztBQVFBOzs7O0FBSUEsSUFBTVUsTUFBSyxlQUFMLEdBQXVCLFNBQXZCQSxLQUF1QixDQUFDQyxNQUFELEVBQVk7QUFDckMsUUFBSSxDQUFDbEIsU0FBRCxJQUFjLE9BQU9tQixDQUFQLEtBQWEsV0FBM0IsSUFBMEMsQ0FBQ0QsTUFBM0MsSUFBcURBLE9BQU9FLE9BQVAsQ0FBZSxJQUFmLEVBQXFCLEVBQXJCLE1BQTZCLEVBQXRGLEVBQTBGO0FBQ3RGO0FBQ0EsZUFBTyxLQUFQO0FBQ0g7O0FBRUQsUUFBTUMsT0FBT0YsRUFBRSxNQUFGLENBQWI7O0FBRUEsUUFBSUQsV0FBVyxRQUFmLEVBQXlCO0FBQ3JCLGVBQU8sQ0FBQyxDQUFFRyxLQUFLQyxJQUFMLENBQVUsY0FBVixFQUEwQkMsRUFBMUIsQ0FBNkIsVUFBN0IsQ0FBVjtBQUNILEtBRkQsTUFFTyxJQUFJTCxXQUFXLFFBQWYsRUFBeUI7QUFDNUIsZUFBTyxDQUFDLENBQUVHLEtBQUtDLElBQUwsQ0FBVSxjQUFWLEVBQTBCQyxFQUExQixDQUE2QixVQUE3QixDQUFWO0FBQ0gsS0FGTSxNQUVBLElBQUlMLFdBQVcsU0FBZixFQUEwQjtBQUM3QixlQUFPLENBQUVHLEtBQUtDLElBQUwsQ0FBVSxjQUFWLEVBQTBCQyxFQUExQixDQUE2QixVQUE3QixDQUFGLElBQ0EsQ0FBRUYsS0FBS0MsSUFBTCxDQUFVLGNBQVYsRUFBMEJDLEVBQTFCLENBQTZCLFVBQTdCLENBRFQ7QUFFSCxLQUhNLE1BR0EsSUFBSUwsV0FBVyxNQUFmLEVBQXVCO0FBQzFCLGVBQU8sQ0FBQyxDQUFFRyxLQUFLQyxJQUFMLENBQVUsWUFBVixFQUF3QkMsRUFBeEIsQ0FBMkIsVUFBM0IsQ0FBVjtBQUNIOztBQUVELFdBQU8sS0FBUDtBQUNILENBcEJEOztBQXNCQTs7Ozs7O0FBTUEsSUFBTUMsSUFBRyxhQUFILEdBQW1CLFNBQW5CQSxHQUFtQixDQUFDQyxPQUFELEVBQWE7QUFDbEMsV0FBTyxDQUFDLENBQUUsOEVBQThFYixJQUE5RSxDQUFtRmEsT0FBbkYsQ0FBVjtBQUNILENBRkQ7O0FBSUE7QUFDQTs7a0JBRWUsRUFBRXZCLFVBQUYsRUFBUUYsZ0JBQVIsRUFBaUJNLE1BQWpCLEVBQXFCSyxVQUFyQixFQUEyQkcsUUFBM0IsRUFBZ0NELGdCQUFoQyxFQUF5Q0UsY0FBekMsRUFBaURDLFlBQWpELEVBQXdEQyxZQUF4RCxFQUErRE8sUUFBL0QsRSIsImZpbGUiOiJpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovLyogOjogaW1wb3J0IHR5cGUge05vZGUsIEJyb3dzZXIsIEllLCBFZGdlLCBJb3MsIEFuZHJvaWQsIE1vYmlsZSwgVG91Y2gsIE1lZGlhLCBVcmx9IGZyb20gJy4vX3Rlc3QvaXMuZmxvdy5qcyc7ICovXG4ndXNlIHN0cmljdCc7XG4vKiBnbG9iYWwgJCwgd2luZG93LCBkb2N1bWVudCwgbW9kdWxlLCBwcm9jZXNzLCBuYXZpZ2F0b3IgKi9cblxuLyogOjogaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogQ2hlY2sgaWYgaXMgYnJvd3NlclxuICogQHBhcmFtICB7Kn0gdmFsXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5jb25zdCBicm93c2VyLyogOjogOkJyb3dzZXIgKi8gPSAoKSA9PiAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyk7XG5cbi8qKlxuICogQ2hlY2sgaWYgaXMgbm9kZVxuICogQHBhcmFtICB7Kn0gdmFsXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5jb25zdCBub2RlLyogOjogOk5vZGUgKi8gPSAoKSA9PiAhISh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpO1xuXG4vKipcbiAqIElzIGl0IGllP1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgaWUvKiA6OiA6SWUgKi8gPSAoKSA9PiAhIShicm93c2VyKCkgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC90cmlkZW50XFwvN1xcLi8pKTtcblxuLyoqXG4gKiBJcyBlZGdlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5jb25zdCBlZGdlLyogOjogOkVkZ2UgKi8gPSAoKSA9PiAhIShicm93c2VyKCkgJiYgL2VkZ2VcXC9cXGQuL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpKTtcblxuLyoqXG4gKiBJcyBhbmRyb2lkXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5jb25zdCBhbmRyb2lkLyogOjogOkFuZHJvaWQgKi8gPSAoKSA9PiAhIShicm93c2VyKCkgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hbmRyb2lkLykpO1xuXG4vKipcbiAqIElzIGlvc1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgaW9zLyogOjogOklvcyAqLyA9ICgpID0+ICEhKGJyb3dzZXIoKSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhpcG9kfGlwaG9uZXxpcGFkKS8pKTtcblxuLyoqXG4gKiBJcyBpdCBtb2JpbGU/XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5jb25zdCBtb2JpbGUvKiA6OiA6TW9iaWxlICovID0gKCkgPT4ge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICBpZiAoYnJvd3NlcigpICYmIC9BbmRyb2lkfFRhYmxldCBQQ3xQYWxtT1N8UGFsbVNvdXJjZXxzbWFydHBob25lfEdULVAxMDAwfFNHSC1UODQ5fFNIVy1NMTgwU3x3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8QkJ8UGxheUJvb2t8SUVNb2JpbGV8V2luZG93cyBDRXxXaW5kb3dzIE1vYmlsZXxXaW5kb3dzIFBob25lfEtpbmRsZXxTaWxrfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgZGV2aWNlIGlzIHRvdWNoXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5jb25zdCB0b3VjaC8qIDo6IDpUb3VjaCAqLyA9ICgpID0+IHtcbiAgICBpZiAoYnJvd3NlcigpKSB7XG4gICAgICAgIHJldHVybiAhISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8ICEhKCdtc21heHRvdWNocG9pbnRzJyBpbiB3aW5kb3cubmF2aWdhdG9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIG1lZGlhIGlzLi4uXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5jb25zdCBtZWRpYS8qIDo6IDpNZWRpYSAqLyA9ICh0YXJnZXQpID0+IHtcbiAgICBpZiAoIWJyb3dzZXIoKSB8fCB0eXBlb2YgJCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXRhcmdldCB8fCB0YXJnZXQucmVwbGFjZSgvIC9nLCAnJykgPT09ICcnKSB7XG4gICAgICAgIC8vIFRPRE86IFdlIHNob3VsZCB0cnkgdG8gZG8gd2l0aG91dCAkXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBib2R5ID0gJCgnYm9keScpO1xuXG4gICAgaWYgKHRhcmdldCA9PT0gJ21vYmlsZScpIHtcbiAgICAgICAgcmV0dXJuICEhKGJvZHkuZmluZCgnPiAuaXMtbW9iaWxlJykuaXMoJzp2aXNpYmxlJykpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAndGFibGV0Jykge1xuICAgICAgICByZXR1cm4gISEoYm9keS5maW5kKCc+IC5pcy10YWJsZXQnKS5pcygnOnZpc2libGUnKSk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdkZXNrdG9wJykge1xuICAgICAgICByZXR1cm4gIShib2R5LmZpbmQoJz4gLmlzLW1vYmlsZScpLmlzKCc6dmlzaWJsZScpKSAmJlxuICAgICAgICAgICAgICAgIShib2R5LmZpbmQoJz4gLmlzLXRhYmxldCcpLmlzKCc6dmlzaWJsZScpKTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ292ZXInKSB7XG4gICAgICAgIHJldHVybiAhIShib2R5LmZpbmQoJz4gLmlzLW92ZXInKS5pcygnOnZpc2libGUnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB1cmwgaXMgdmFsaWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsVGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IHVybC8qIDo6IDpVcmwgKi8gPSAodXJsVGVzdCkgPT4ge1xuICAgIHJldHVybiAhISgvKGh0dHB8aHR0cHMpOlxcL1xcLyhcXHcrOnswLDF9XFx3Kik/KFxcUyspKDpbMC05XSspPyhcXC98XFwvKFtcXHcjITouPys9JiUhXFwtXFwvXSkpPy8udGVzdCh1cmxUZXN0KSk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgZGVmYXVsdCB7IG5vZGUsIGJyb3dzZXIsIGllLCBlZGdlLCBpb3MsIGFuZHJvaWQsIG1vYmlsZSwgdG91Y2gsIG1lZGlhLCB1cmwgfTtcbiJdfQ==