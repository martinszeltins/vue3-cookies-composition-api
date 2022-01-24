import { ref, watch } from 'vue'
import { useCookie } from 'vue-cookie-next'

const isCookiesAllowed = ref(false)

export default function useCookies(gtag: any) {
    const cookie = useCookie()

    if (cookie.isCookieAvailable('cookies_consent')) {
        isCookiesAllowed.value = cookie.getCookie('cookies_consent') === 'true'
        gtag.optIn()
    } else {
        isCookiesAllowed.value = false
    }

    watch(isCookiesAllowed, () => {
        if (isCookiesAllowed.value === true) {
            cookie.setCookie('cookies_consent', isCookiesAllowed.value.toString(), {
                expire: new Date(2022, 1, 1),
            })

            gtag.optIn()
        } else {
            gtag.optOut()
        }
    })

    const acceptCookies = () => {
        isCookiesAllowed.value = true
    }

    return {
        isCookiesAllowed,
        acceptCookies,
    }
}