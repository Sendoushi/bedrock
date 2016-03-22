import React from 'react';
import { cE } from 'bedrock/component';
import { Icon } from 'bedrock/icon';
import actions from 'modules/actions.js';

// -----------------------------------------
// VARS

const PROP_TYPES = {
    type: React.PropTypes.string.isRequired,
    params: React.PropTypes.object
};

// -----------------------------------------
// FUNCTIONS

/**
 * Close click handler
 * @param  {tag} self
 * @param  {event} evt
 */
const closeClick = (self, evt) => {
    evt.stopPropagation();
    actions.unsetModal();
};

/**
 * Modal click handler
 * @param  {tag} self
 * @param  {event} evt
 */
const modalClick = (self, evt) => {
    evt.stopPropagation();
};

/**
 * Renders content tag
 * @param  {tag} self
 * @return {tag}
 */
const renderContent = (self) => {
    const params = self.props.params;
    let wrapperClass = '';
    let contentTag;

    // Decide content tag
    switch (self.props.type) {
    case 'EXAMPLE':
        wrapperClass = 'modal-example';
        contentTag = cE('div');
        break;
    default:
    }

    // Finally the content tag
    return (
    cE('div.modal-content', [
        cE('h3', null, [params.title]),
        cE(`div.${wrapperClass}`, null, [contentTag])
    ])
    );
};

/**
 * Renders tag
 * @param  {tag} self
 */
const render = (self) => {
    return (
    cE('div.align-middle-wrapper.modal', { onClick: evt => closeClick(self, evt) }, [
        cE('div.align-middle.modal-content-wrapper', { onClick: evt => modalClick(self, evt) }, [
            cE('button.button.button-close', { onClick: evt => closeClick(self, evt) }, [
                cE(Icon, { name: 'times', set: 'fa' })
            ]),
            renderContent(self)
        ])
    ])
    );
};

// -----------------------------------------
// The tag

class Modal extends React.Component {
    render() { return render(this); }
}

// Set prop types
Modal.propTypes = PROP_TYPES;

// -------------------------------------------
// EXPORT

export { Modal };
