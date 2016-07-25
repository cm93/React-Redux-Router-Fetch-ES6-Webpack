/**
 * Created by dev on 16/7/22.
 */
export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export function modalOpen() {
    return {type: MODAL_OPEN}
}

export function modalClose() {
    return {type: MODAL_CLOSE}
}