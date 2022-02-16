import { useBoolState } from '@havlasme/react-toolkit'

/**
 * The useCombinedState hook.
 *
 * @param {boolean} initialValue
 * @param {boolean} combine
 * @return {[boolean, function]}
 */
const useCombinedState = function (initialValue, combine = false) {
    const [value, set] = useBoolState(initialValue)

    return [value || combine, set]
}

export default useCombinedState
