'use strict';
/* global $, window, document, module, process, navigator */

Object.defineProperty(exports, "__esModule", {
    value: true
});


// -----------------------------------------
// Functions

/**
 * Check if is browser
 * @return {boolean}
 */
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
var mediaValidate = void 0;
var media = function media(target) {
    mediaValidate([target]);

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
var urlItems = [{ title: 'urlTest', type: 'string', required: true }];
var urlValidate = void 0;
var url = function url(urlTest) {
    urlValidate([urlTest]);
    return !!/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(urlTest);
};

// ------------------------------------
// Export

exports.default = { node: node, browser: browser, ie: ie, edge: edge, ios: ios, android: android, mobile: mobile, touch: touch, media: media, url: url };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pcy5qcyJdLCJuYW1lcyI6WyJicm93c2VyIiwid2luZG93Iiwibm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwcm9jZXNzIiwiaWUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwiZWRnZSIsInRlc3QiLCJhbmRyb2lkIiwiaW9zIiwibW9iaWxlIiwidG91Y2giLCJtZWRpYVZhbGlkYXRlIiwibWVkaWEiLCJ0YXJnZXQiLCIkIiwicmVwbGFjZSIsImJvZHkiLCJmaW5kIiwiaXMiLCJ1cmxJdGVtcyIsInRpdGxlIiwidHlwZSIsInJlcXVpcmVkIiwidXJsVmFsaWRhdGUiLCJ1cmwiLCJ1cmxUZXN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7Ozs7O0FBSUE7QUFDQTs7QUFFQTs7OztBQUlBLElBQU1BLFVBQVUsU0FBVkEsT0FBVTtBQUFBLFdBQU0sQ0FBQyxFQUFFLE9BQU9DLE1BQVAsS0FBa0IsV0FBcEIsQ0FBUDtBQUFBLENBQWhCOztBQUVBOzs7O0FBSUEsSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsV0FBTSxDQUFDLEVBQUUsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsT0FBT0MsT0FBeEMsSUFBbUQsT0FBT0MsT0FBUCxLQUFtQixXQUF4RSxDQUFQO0FBQUEsQ0FBYjs7QUFFQTs7OztBQUlBLElBQU1DLEtBQUssU0FBTEEsRUFBSztBQUFBLFdBQU0sQ0FBQyxFQUFFTixhQUFhTyxVQUFVQyxTQUFWLENBQW9CQyxXQUFwQixHQUFrQ0MsS0FBbEMsQ0FBd0MsY0FBeEMsQ0FBZixDQUFQO0FBQUEsQ0FBWDs7QUFFQTs7OztBQUlBLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLFdBQU0sQ0FBQyxFQUFFWCxhQUFhLGFBQWFZLElBQWIsQ0FBa0JMLFVBQVVDLFNBQVYsQ0FBb0JDLFdBQXBCLEVBQWxCLENBQWYsQ0FBUDtBQUFBLENBQWI7O0FBRUE7Ozs7QUFJQSxJQUFNSSxVQUFVLFNB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ZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbi8qIGdsb2JhbCAkLCB3aW5kb3csIGRvY3VtZW50LCBtb2R1bGUsIHByb2Nlc3MsIG5hdmlnYXRvciAqL1xuXG5pbXBvcnQgeyBjb21waWxlU2NoZW1hLCBnZXRTY2hlbWEgfSBmcm9tICdiZWRyb2NrLXV0aWxzL3NyYy92YWxpZGF0ZS5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGdW5jdGlvbnNcblxuLyoqXG4gKiBDaGVjayBpZiBpcyBicm93c2VyXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5jb25zdCBicm93c2VyID0gKCkgPT4gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpO1xuXG4vKipcbiAqIENoZWNrIGlmIGlzIG5vZGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmNvbnN0IG5vZGUgPSAoKSA9PiAhISh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpO1xuXG4vKipcbiAqIElzIGl0IGllP1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgaWUgPSAoKSA9PiAhIShicm93c2VyKCkgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC90cmlkZW50XFwvN1xcLi8pKTtcblxuLyoqXG4gKiBJcyBlZGdlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5jb25zdCBlZGdlID0gKCkgPT4gISEoYnJvd3NlcigpICYmIC9lZGdlXFwvXFxkLi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKSk7XG5cbi8qKlxuICogSXMgYW5kcm9pZFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgYW5kcm9pZCA9ICgpID0+ICEhKGJyb3dzZXIoKSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FuZHJvaWQvKSk7XG5cbi8qKlxuICogSXMgaW9zXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5jb25zdCBpb3MgPSAoKSA9PiAhIShicm93c2VyKCkgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oaXBvZHxpcGhvbmV8aXBhZCkvKSk7XG5cbi8qKlxuICogSXMgaXQgbW9iaWxlP1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgbW9iaWxlID0gKCkgPT4ge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICBpZiAoYnJvd3NlcigpICYmIC9BbmRyb2lkfFRhYmxldCBQQ3xQYWxtT1N8UGFsbVNvdXJjZXxzbWFydHBob25lfEdULVAxMDAwfFNHSC1UODQ5fFNIVy1NMTgwU3x3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8QkJ8UGxheUJvb2t8SUVNb2JpbGV8V2luZG93cyBDRXxXaW5kb3dzIE1vYmlsZXxXaW5kb3dzIFBob25lfEtpbmRsZXxTaWxrfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgZGV2aWNlIGlzIHRvdWNoXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5jb25zdCB0b3VjaCA9ICgpID0+IHtcbiAgICBpZiAoYnJvd3NlcigpKSB7XG4gICAgICAgIHJldHVybiAhISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8ICEhKCdtc21heHRvdWNocG9pbnRzJyBpbiB3aW5kb3cubmF2aWdhdG9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIG1lZGlhIGlzLi4uXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5jb25zdCBtZWRpYVZhbGlkYXRlID0gY29tcGlsZVNjaGVtYShnZXRTY2hlbWEoW1xuICAgIHsgdGl0bGU6ICd0YXJnZXQnLCB0eXBlOiAnc3RyaW5nJywgcmVxdWlyZWQ6IHRydWUgfVxuXSkpO1xuY29uc3QgbWVkaWEgPSAodGFyZ2V0KSA9PiB7XG4gICAgbWVkaWFWYWxpZGF0ZShbdGFyZ2V0XSk7XG5cbiAgICBpZiAoIWJyb3dzZXIoKSB8fCB0eXBlb2YgJCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXRhcmdldCB8fCB0YXJnZXQucmVwbGFjZSgvIC9nLCAnJykgPT09ICcnKSB7XG4gICAgICAgIC8vIFRPRE86IFdlIHNob3VsZCB0cnkgdG8gZG8gd2l0aG91dCAkXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBib2R5ID0gJCgnYm9keScpO1xuXG4gICAgaWYgKHRhcmdldCA9PT0gJ21vYmlsZScpIHtcbiAgICAgICAgcmV0dXJuICEhKGJvZHkuZmluZCgnPiAuaXMtbW9iaWxlJykuaXMoJzp2aXNpYmxlJykpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAndGFibGV0Jykge1xuICAgICAgICByZXR1cm4gISEoYm9keS5maW5kKCc+IC5pcy10YWJsZXQnKS5pcygnOnZpc2libGUnKSk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdkZXNrdG9wJykge1xuICAgICAgICByZXR1cm4gIShib2R5LmZpbmQoJz4gLmlzLW1vYmlsZScpLmlzKCc6dmlzaWJsZScpKSAmJlxuICAgICAgICAgICAgICAgIShib2R5LmZpbmQoJz4gLmlzLXRhYmxldCcpLmlzKCc6dmlzaWJsZScpKTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ292ZXInKSB7XG4gICAgICAgIHJldHVybiAhIShib2R5LmZpbmQoJz4gLmlzLW92ZXInKS5pcygnOnZpc2libGUnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB1cmwgaXMgdmFsaWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsVGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IHVybEl0ZW1zID0gW3sgdGl0bGU6ICd1cmxUZXN0JywgdHlwZTogJ3N0cmluZycsIHJlcXVpcmVkOiB0cnVlIH1dO1xuY29uc3QgdXJsVmFsaWRhdGUgPSBjb21waWxlU2NoZW1hKGdldFNjaGVtYSh1cmxJdGVtcykpO1xuY29uc3QgdXJsID0gKHVybFRlc3QpID0+IHtcbiAgICB1cmxWYWxpZGF0ZShbdXJsVGVzdF0pO1xuICAgIHJldHVybiAhISgvKGh0dHB8aHR0cHMpOlxcL1xcLyhcXHcrOnswLDF9XFx3Kik/KFxcUyspKDpbMC05XSspPyhcXC98XFwvKFtcXHcjITouPys9JiUhXFwtXFwvXSkpPy8udGVzdCh1cmxUZXN0KSk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgZGVmYXVsdCB7IG5vZGUsIGJyb3dzZXIsIGllLCBlZGdlLCBpb3MsIGFuZHJvaWQsIG1vYmlsZSwgdG91Y2gsIG1lZGlhLCB1cmwgfTtcbiJdfQ==