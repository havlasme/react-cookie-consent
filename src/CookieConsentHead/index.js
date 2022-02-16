import cc from 'classcat'
import React from 'react'
import propTypes from './index.type'

/**
 * The CookieConsent.Head component.
 *
 * @return {JSX.Element}
 * @constructor
 */
const CookieConsentHead = function ({ children, className }) {
    return (
        <div className={cc(['cc-head', className])}>
            {children}
        </div>
    )
}

CookieConsentHead.propTypes = propTypes

export default CookieConsentHead
