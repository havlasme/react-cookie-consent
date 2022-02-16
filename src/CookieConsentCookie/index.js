import { isNil } from 'ramda'
import React from 'react'
import propTypes from './index.type'

/**
 * The CookieConsent.Cookie component.
 *
 * @return {JSX.Element}
 * @constructor
 */
const CookieConsentCookie = function ({ children, expiration, name, type }) {
    return (
        <div className="cc-cookie">
            <h6 className="cc-cookie-head">
                {name}
            </h6>

            <div className="cc-cookie-body">
                {children}
            </div>

            <div className="cc-cookie-foot">
                <div className="cc-cookie-expiration">
                    <strong>Platnosť do</strong>: {expiration}
                </div>

                {!isNil(type) &&
                    <div className="cc-cookie-type">
                        <strong>Typ</strong>: {type}
                    </div>
                }
            </div>
        </div>
    )
}

CookieConsentCookie.propTypes = propTypes

export default CookieConsentCookie
