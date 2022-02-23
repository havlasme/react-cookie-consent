import { useBoolState } from '@havlasme/react-toolkit'
import cc from 'classcat'
import React from 'react'
import CookieConsentCookie from '../CookieConsentCookie'
import propTypes from './index.type'

/**
 * The CookieConsent.Category component.
 *
 * @return {JSX.Element}
 * @constructor
 */
const CookieConsentCategory = function ({ checked = false, children, className, disabled = false, name, title, onChange }) {
    // is the cookie category expanded?
    const [expand, setExpand] = useBoolState(false)

    return (
        <div className={cc(['cc-category', className, { expand }])}>
            <div className="cc-category-head">
                <button className="cc-category-title" type="button" onClick={setExpand}>
                    {title}
                </button>

                <label className="cc-checkbox">
                    <input checked={checked} disabled={disabled} name={name} type="checkbox" onChange={onChange}/>

                    <span className="cc-checkbox-control"/>
                </label>
            </div>

            <div className="cc-category-body">
                {React.Children.map(children, function (child) {
                    if (React.isValidElement(child) && child.type !== CookieConsentCookie) {
                        return child
                    }
                    return null
                })}

                {expand &&
                    React.Children.map(children, function (child) {
                        if (React.isValidElement(child) && child.type === CookieConsentCookie) {
                            return child
                        }
                        return null
                    })
                }
            </div>
        </div>
    )
}

CookieConsentCategory.propTypes = propTypes

export default CookieConsentCategory
