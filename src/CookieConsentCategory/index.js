import { useBoolState, withComponentProxy } from '@havlasme/react-toolkit'
import cc from 'classcat'
import React from 'react'
import propTypes from './index.type'

/**
 * The CookieConsent.Category component.
 *
 * @return {JSX.Element}
 * @constructor
 */
const CookieConsentCategory = function ({ checked = false, children, disabled = false, name, title, onChange }) {
    // is the cookie category expanded?
    const [expand, setExpand] = useBoolState(false)

    return (
        <div className={cc(['cc-category', { expand }])}>
            <div className="cc-category-head">
                <button className="cc-category-title" type="button" onClick={setExpand}>
                    {title}
                </button>

                <label className="cc-switch">
                    <input checked={checked} disabled={disabled} name={name} type="checkbox" onChange={onChange}/>

                    <span className="cc-switch-control"/>
                </label>
            </div>

            {expand &&
                <div className="cc-category-body">
                    {children}
                </div>
            }
        </div>
    )
}

CookieConsentCategory.propTypes = propTypes

export default withComponentProxy(CookieConsentCategory)
