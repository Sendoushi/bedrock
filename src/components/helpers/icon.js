module.exports = function (name) {
    var tmpl = '<span class="icon-wrapper icon-wrapper-' + name + '">';
    tmpl += '<svg viewBox="0 0 1792 1792" class="icon icon-' + name + '">';
    tmpl += '<use xlink:href="#' + name + '"></use>';
    tmpl += '</svg></span>';

    return tmpl;
};
