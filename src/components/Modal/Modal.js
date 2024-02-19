import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, cx, hide, children }) => {
    return isShowing
        ? ReactDOM.createPortal(
              <React.Fragment>
                  <div
                      className={cx('modal-overlay')}
                      onClick={() => {
                          hide();
                      }}
                  ></div>
                  <div className={cx('modal-wrapper')} aria-modal aria-hidden tabIndex={-1} role="dialog">
                      <div className={cx('modal-inner')}>
                          <div className={cx('modal')}>
                              <div className={cx('modal-header')}>
                                  <button
                                      type="button"
                                      className={cx('modal-close-button')}
                                      data-dismiss="modal"
                                      aria-label="Close"
                                      onClick={() => {
                                          hide();
                                      }}
                                  >
                                      <span aria-hidden="true">&times;</span>
                                  </button>
                              </div>
                              <div className={cx('modal-body')}>{children}</div>
                              <div className={cx('modal-footer')}></div>
                          </div>
                      </div>
                  </div>
              </React.Fragment>,
              document.body,
          )
        : null;
};
export default Modal;
