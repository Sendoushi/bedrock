import { riot, updateState } from 'sdsFrontend/component';
import { addIcon } from 'sdsFrontend/icon';
import actions from '../modules/app/actions.js';
// TODO: This doesn't work (because of variables file)
//       but wouldn't it be nice if it did?
// import './_assets/css/modal.scss';

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
 * @param  {*} opts
 * @param  {object} state
 */
const onUpdate = (self, opts, state) => {
    const newModal = state && state.modal;
    const initialModal = actions.getInitial().modal;
    const newState = updateState(self.state, newModal, initialModal);

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
    self.on('update', onUpdate.bind(null, self, opts));

    actions.addView(self);
};

/**
 * On unmount handler
 * @param  {tag} self
 */
const onUnmount = (self) => actions.removeView(self);

// -----------------------------------------
// Initialize

/**
 * Initialize
 * @param  {object} opts
 */
const init = function (opts) {
    // Set events for the view
    this.on('mount', () => onMount(this, opts));
    this.on('unmount', () => onUnmount(this, opts));

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
