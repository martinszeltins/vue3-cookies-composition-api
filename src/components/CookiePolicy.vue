<template>
    <div>
        <h1>Cookie Policy for Your App</h1>

        <div>
            <h2>We use cookies for Google Analytics, you can disable it here:</h2>

            <input type="checkbox" v-model="isCookiesAllowed" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { inject } from 'vue'
    import useCookies from '../composable/useCookies'

    const gtag = inject('gtag')
    const { isCookiesAllowed } = useCookies(gtag)
</script>