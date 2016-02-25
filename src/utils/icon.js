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
 * @param  {boolean} isInverse
 * @return {string}
 */
const addIcon = (icon, isInverse, size) => {
    const newSize = size || 'small';
    let src;
    let tmpl;

    // Get the right icon
    if (isInverse) {
        src = ICONS_INVERSE[icon] || `${FONTAWESOME_INVERSE_SRC}#fa-${icon}`;
    } else {
        src = ICONS[icon] || `${FONTAWESOME_SRC}#fa-${icon}`;
    }

    tmpl = `
    <div class="icon-wrapper">
        <img src="${ src }" class="icon icon-${ newSize } icon-${ icon }">
    </div>
    `;

    return tmpl;
};

// -----------------------------------------
// EXPORT

export { addIcon };
