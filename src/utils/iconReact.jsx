import React from 'react';

// -----------------------------------------
// VARS

const FONTAWESOME_SRC = '/_assets/svg/fontawesome.svg';
const FONTAWESOME_INVERSE_SRC = '/_assets/svg/fontawesome-white.svg';

const ICONS = {};
const ICONS_INVERSE = {};

// -----------------------------------------
// FUNCTIONS

/**
 * Adds icon
 * @param  {string} icon
 * @param  {object} options
 * @return {string}
 */
const addIcon = (icon, options = {}) => {
    const size = options.size || 'small';
    const isInverse = options.isInverse;
    const iconClasses = `icon icon-${size} icon-${icon}`;
    let src;

    // Get the right icon
    if (isInverse) {
        src = ICONS_INVERSE[icon] || `${FONTAWESOME_INVERSE_SRC}#fa-${icon}`;
    } else {
        src = ICONS[icon] || `${FONTAWESOME_SRC}#fa-${icon}`;
    }

    return (
        <div className="icon-wrapper">
            <img src={src} className={iconClasses} />
        </div>
    );
};

// -----------------------------------------
// EXPORT

export { addIcon };
