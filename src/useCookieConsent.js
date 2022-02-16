import { tryParse } from '@havlasme/react-toolkit'
import { getUnixTime } from 'date-fns'
import { defaultTo, isNil, mergeRight } from 'ramda'
import { useState } from 'react'

/**
 * Check stored value expiration.
 *
 * @param {*} state
 * @param {number} expiration
 * @param {number} version
 * @returns {boolean}
 */
export const isExpired = function (state, expiration, version) {
    return (!isNil(expiration) && defaultTo(0, state._timestamp) + expiration < getUnixTime(new Date()))
        || (!isNil(version) && state._version !== version)
}

/**
 * The useCookieConsent hook.
 *
 * @param {*} initialValue
 * @param {Object} obj
 * @param {string} obj.key
 * @param {number} obj.version
 * @return {*}
 */
const useCookieConsent = function (initialValue, { key = 'cc:persist', version = 1 } = {}) {
    const [storedValue, setStoredValue] = useState(function () {
        try {
            return defaultTo(initialValue, tryParse(window.localStorage.getItem(key)))
        } catch (error) {
            return initialValue
        }
    })

    const setValue = function (value) {
        try {
            const valueToStore = mergeRight(value instanceof Function ? value(storedValue) : value, { _timestamp: getUnixTime(new Date()), _version: version })
            setStoredValue(valueToStore)
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            console.log(error)
        }
    }

    return [storedValue, setStoredValue, setValue]
}

export default useCookieConsent
