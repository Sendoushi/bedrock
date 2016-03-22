import React from 'react';
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
        contentTag = <div></div>;
        break;
    default:
    }

    // Finally the content tag
    return (
    <div className="modal-content">
        <h3>{params.title}</h3>
        <div className={wrapperClass}>
            {contentTag}
        </div>
    </div>
    );
};

/**
 * Renders tag
 * @param  {tag} self
 */
const render = (self) => {
    const closeClickHandler = evt => closeClick(self, evt);
    const modalClickHandler = evt => modalClick(self, evt);
    const content = renderContent(self);

    return (
    <div className="align-middle-wrapper modal" onClick={closeClickHandler}>
        <div className="align-middle modal-content-wrapper" onClick={modalClickHandler}>
            <button className="button button-close" onClick={closeClickHandler}>
                <Icon name="times" set="fa" />
            </button>
            {content}
        </div>
    </div>
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
