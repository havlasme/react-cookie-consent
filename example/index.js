import { CookieConsent } from '@havlasme/react-cookie-consent'
import '@havlasme/react-cookie-consent/style.scss'
import { useBoolState } from '@havlasme/react-toolkit'
import { isNil } from 'ramda'
import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom'

const ExampleApp = function () {
    const [state, setState] = useState(null)
    const [expand, setExpand] = useBoolState(false)

    const handleSubmit = useCallback(function (event) {
        // handle cookie consent
        setState(event)
        console.log('cookie-consent', event)
        // hide cookie consent
        setExpand(false)
    }, [setExpand])

    return (
        <div className="react-cookie-consent-example">
            <h1>
                React Cookie Consent Example
            </h1>

            {!isNil(state) &&
                <div className="react-cookie-consent-example-value">
                    {JSON.stringify(state)}
                </div>
            }

            <button type="button" onClick={setExpand}>
                Customize Cookie Consent
            </button>

            <CookieConsent.Portal>
                <CookieConsent open={expand} version={20220201} onSubmit={handleSubmit}>
                    <h4 className="cc-title">
                        Cookie Consent
                    </h4>

                    <div className="cc-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus, eros in rhoncus volutpat, metus diam malesuada velit, quis
                        suscipit lacus ligula eget arcu. Duis tempor leo eget leo tristique hendrerit. Proin luctus lobortis libero, et lacinia libero suscipit
                        et. Phasellus venenatis metus ut velit maximus, eget lacinia arcu ultrices.
                    </div>

                    <div className="cc-privacy-policy">
                        Read more in <a href="#">privacy policy</a>
                    </div>

                    <CookieConsent.Category checked={true} disabled={true} name="technical" title="Technical">
                        <div className="cc-category-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue commodo purus, nec semper orci hendrerit eget. Nam in purus
                            eget neque feugiat consequat id eget odio.
                        </div>

                        <CookieConsent.Cookie name="cc:consent" expiration="Persistent" type="HTML">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque placerat massa, eu molestie diam aliquam vitae.
                        </CookieConsent.Cookie>
                    </CookieConsent.Category>

                    <CookieConsent.Category name="analytical" title="Analytical">
                        <div className="cc-category-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis rutrum hendrerit. Quisque quis dui id lorem elementum
                            consectetur a ut orci. Suspendisse aliquet sit amet justo nec viverra. Suspendisse potenti.
                        </div>

                        <CookieConsent.Cookie name="analytical1" expiration="1 year" type="HTTP">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc arcu, tincidunt ac ligula in, tempor consectetur arcu. Mauris
                            nec magna finibus, efficitur nunc id, pretium nunc.
                        </CookieConsent.Cookie>

                        <CookieConsent.Cookie name="analytical2" expiration="1 minute" type="HTTP">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies luctus aliquet. Duis nec urna sit amet eros pharetra
                            auctor et sit amet leo. Sed interdum blandit lorem. Maecenas facilisis ut ante et scelerisque.
                        </CookieConsent.Cookie>
                    </CookieConsent.Category>

                    <CookieConsent.Category name="marketing" title="Marketing">
                        <div className="cc-category-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia ultrices pellentesque. Proin sodales ac tellus in volutpat.
                            Curabitur semper tempor dolor vitae posuere. Pellentesque ultrices orci vel scelerisque molestie. Curabitur eget arcu et dolor
                            maximus lacinia. Aenean nec turpis ut lectus gravida semper at varius mauris. Sed eget eleifend purus.
                        </div>

                        <CookieConsent.Cookie name="marketing1" expiration="3 month" type="HTTP">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue neque, lobortis eu leo ac, mattis ullamcorper odio. Fusce
                            elementum leo nibh, eu tristique augue vestibulum sed.
                        </CookieConsent.Cookie>
                    </CookieConsent.Category>
                </CookieConsent>
            </CookieConsent.Portal>
        </div>
    )
}

ReactDOM.render(<ExampleApp/>, document.getElementById('root'))
