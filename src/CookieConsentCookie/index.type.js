import PropType from 'prop-types'

export default {
    /**
     * the children
     */
    children: PropType.node,
    /**
     * the cookie expiration
     */
    expiration: PropType.string.isRequired,
    /**
     * the cookie name
     */
    name: PropType.string.isRequired,
    /**
     * the cookie type
     */
    type: PropType.string,
}
