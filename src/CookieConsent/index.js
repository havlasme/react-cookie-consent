import { runEventCallback, useClassName } from '@havlasme/react-toolkit'
import cc from 'classcat'
import { defaultTo, isNil, mergeLeft, omit, or } from 'ramda'
import React, { useCallback, useEffect } from 'react'
import CookieConsentCategory from '../CookieConsentCategory'
import CookieConsentCookie from '../CookieConsentCookie'
import CookieConsentHead from '../CookieConsentHead'
import CookieConsentPortal from '../CookieConsentPortal'
import propTypes from './index.type'
import './style.scss'
import useBoolState from '../useBoolState'
import useCookieConsent, { isExpired } from '../useCookieConsent'

const mapCookieCategory = function (children, state, implicit = false) {
    return React.Children.toArray(children).reduce(function (map, child) {
        if (React.isValidElement(child) && child.type === CookieConsentCategory && child.props.disabled !== true) {
            return { ...map, [child.props.name]: defaultTo(child.props.checked, implicit || state[child.props.name]) }
        }
        return map
    }, {})
}

/**
 * The CookieConsent component.
 *
 * @return {null|JSX.Element}
 * @constructor
 */
const CookieConsent = function ({ children, expiration = 31536000, open = false, persist = 'cc:consent', version, onAccept }) {
    // cookie category persistent state
    const [state, setState, persistState] = useCookieConsent({ _version: version }, { key: persist, version })
    // is the cookie consent expanded?
    const [expand, setExpand] = useBoolState(false, open)

    const onSubmit = useCallback(function (event) {
        persistState(mapCookieCategory(children, state, event.target.dataset.ccAccept === 'accept'))
        setExpand(false)
    }, [children, state, setExpand, persistState])

    const onChange = useCallback(function ({ target }) {
        if (!isNil(target.name) && !isNil(target.checked)) {
            setState(mergeLeft({ [target.name]: target.checked }))
        }
    }, [setState])

    useClassName(expand ? 'cc-open' : null)

    useEffect(function () {
        if (!isExpired(state, expiration, version)) {
            runEventCallback(onAccept, omit(['_timestamp', '_version'], state))
        }
    }, [state._timestamp])

    return (!isExpired(state, expiration, version) && !expand) ? null : (
        <div className={cc(['cc', { expand }])}>
            <div className="cc-content">
                {React.Children.map(children, function (child) {
                    if (React.isValidElement(child) && child.type === CookieConsentHead) {
                        return child
                    }
                    return null
                })}

                {expand &&
                    <div className="cc-body">
                        {React.Children.map(children, function (child) {
                            if (React.isValidElement(child) && child.type === CookieConsentCategory) {
                                return React.cloneElement(child, {
                                    checked: defaultTo(child.props.checked, state[child.props.name]),
                                    onChange: onChange,
                                })
                            }
                            return null
                        })}
                    </div>
                }

                <div className="cc-foot">
                    <button className="cc-accept btn btn-primary btn-symbol" type="button" onClick={onSubmit} data-cc-accept="accept">
                        Povoliť všetky
                    </button>

                    {expand &&
                        <button className="cc-reject btn btn-outline-primary btn-symbol" type="button" onClick={onSubmit}>
                            {Object.values(omit(['_timestamp', '_version'], state)).reduce(or, false) ? 'Povoliť vybrané' : 'Odmietnuť všetky'}
                        </button>
                    }

                    {!expand &&
                        <button className="cc-expand btn btn-outline-primary btn-symbol" type="button" onClick={setExpand}>
                            Prispôsobiť
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

CookieConsent.propTypes = propTypes

CookieConsent.Category = CookieConsentCategory
CookieConsent.Cookie = CookieConsentCookie
CookieConsent.Head = CookieConsentHead
CookieConsent.Portal = CookieConsentPortal

export default CookieConsent