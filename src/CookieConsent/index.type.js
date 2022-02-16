import PropType from 'prop-types'

export default {
    /**
     * the children
     */
    children: PropType.node,
    /**
     * the cookie notice description
     */
    description: PropType.string,
    /**
     * the cookie consent expiration (in seconds)
     * default: 31536000 (1 year)
     */
    expiration: PropType.number,
    /**
     * the cookie consent persistence key
     * default: cc:consent
     */
    key: PropType.string,
    /**
     * the privacy policy uri
     */
    policy: PropType.string.isRequired,
    /**
     * the cookie notice title
     */
    title: PropType.string,
    /**
     * the cookie notice version
     */
    version: PropType.number,
    /**
     * the submit event callback
     */
    onSubmit: PropType.func,
}
