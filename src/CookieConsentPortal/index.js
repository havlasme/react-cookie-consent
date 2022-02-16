import { useMountPoint } from '@havlasme/react-toolkit'
import { isNil } from 'ramda'
import { createPortal } from 'react-dom'
import propTypes from './index.type'

const createModalElement = function () {
    const element = document.createElement('div')

    element.classList.add('cc-portal')
    element.setAttribute('role', 'dialog')
    element.tabIndex = -1

    return element
}

/**
 * The CookieConsent.Portal component.
 *
 * @return {*}
 * @constructor
 */
const CookieConsentPortal = function ({ children }) {
    // the dom node
    const domNode = useMountPoint(createModalElement)

    return isNil(domNode) ? null : createPortal(children, domNode)
}

CookieConsentPortal.propTypes = propTypes

export default CookieConsentPortal
