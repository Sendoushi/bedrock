import riot from 'riot';
import { updateState } from 'bedrock/component';
import { addIcon } from 'bedrock/icon';
import actions from '../modules/actions.js';

/**
 * Close click handler
 * @param  {tag} self
 * @param  {event} evt
 */
const closeClick = (self, evt) => {
    evt.stopPropagation();
    actions.setModal();
};

/**
 * Modal click handler
 * @param  {tag} self
 * @param  {event} evt
 */
const modalClick = (self, evt) => {
    evt.stopPropagation();

    // TODO: What happens now?
};

/**
 * On update handler
 * @param  {tag} self
 */
const onUpdate = (self) => {
    const initialState = actions.getInitial().app.modal;
    const state = actions.getState().app.modal;
    const oldState = self.state;
    const newState = updateState(oldSstate, state, initialState);

    // No need to go further if same
    if (!newState) {
        return;
    }

    // Set specifics by type
    switch (newState.type) {
    case '':
        // TODO: What happens if modal...
        break;
    default :
    }

    // Cache values
    self.state = newState;
};

/**
 * On mount handler
 * @param  {tag} self
 * @param  {*} opts
 */
const onMount = (self, opts) => {
    // Set update method
    self.on('update', () => onUpdate(self));

    // Add for the actions update
    self.unsubscribe = actions.subscribe(self.update);
};

/**
 * On unmount handler
 * @param  {tag} self
 */
const onUnmount = (self) => {
    // Remove events
    self.off('update');

    // Unsubscribe everything
    self.unsubscribe();
};

// -----------------------------------------
// Initialize

/**
 * Initialize
 * @param  {object} opts
 */
const init = function (opts) {
    // Set events for the view
    this.on('mount', () => onMount(this, opts));
    this.on('unmount', () => onUnmount(this));

    // Events related functions
    this.closeClick = (evt) => closeClick(self, evt);
    this.modalClick = (evt) => modalClick(self, evt);
};

/**
 * Register the tag
 */
riot.tag('modal',
    `
    <div class="align-middle-wrapper modal" onclick="{ closeClick }">
        <div class="align-middle modal-content" onclick="{ modalClick }">
            <button class="button button-close" onclick="{ closeClick }">${ addIcon('times') }</button>
            <h3>{ state.params.title }</h3>
            <div if="{ state.type === '' }" class="modal-set-whatever">
                Whatever!
            </div>
        </div>
    </div>
    `,
    init
);
