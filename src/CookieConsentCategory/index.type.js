import PropType from 'prop-types'

export default {
    /**
     * is the cookie category checked?
     * default: false
     */
    checked: PropType.bool,
    /**
     * the children
     */
    children: PropType.node,
    /**
     * is the cookie category disabled?
     * default: false
     */
    disabled: PropType.bool,
    /**
     * the cookie category name, used as identity in response
     */
    name: PropType.string.isRequired,
    /**
     * the cookie category title
     */
    title: PropType.string.isRequired,
    /**
     * the change event callback
     */
    onChange: PropType.func,
}
