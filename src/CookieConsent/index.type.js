import PropType from 'prop-types'

export default {
    /**
     * the children
     */
    children: PropType.node,
    /**
     * the class name
     */
    className: PropType.string,
    /**
     * the cookie consent expiration (in seconds)
     * default: 31536000 (1 year)
     */
    expiration: PropType.number,
    /**
     * is the cookie consent expanded?
     * default: false
     */
    open: PropType.bool,
    /**
     * the cookie consent persistence key
     * default: cc:consent
     */
    persist: PropType.string,
    /**
     * the cookie notice version
     */
    version: PropType.number,
    /**
     * the submit event callback
     */
    onSubmit: PropType.func,
}
