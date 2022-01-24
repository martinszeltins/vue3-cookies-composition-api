<template>
    <div class="container">
        <div v-if="!isCookiesAllowed" class="banner-container">
            <p> We use cookies for more details check our policy</p>
            
            <button @click="okBannerClicked">
                Accept Cookies
            </button>
        </div>

        <CookiePolicy />
    </div>
</template>

<script setup lang="ts">
    import { inject } from 'vue'
    import useCookies from './composable/useCookies'
    import CookiePolicy from './components/CookiePolicy.vue'

    const gtag = inject('gtag')
    const { isCookiesAllowed, acceptCookies } = useCookies(gtag)

    const okBannerClicked = () => {
        acceptCookies()
    }
</script>