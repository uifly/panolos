<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const currentLocale = ref(locale.value)

function changeLocale() {
    locale.value = currentLocale.value
}
</script>

<template>
    <header id="header">
        Header
        <div class="logo" :alt="$t('title')">
            <router-link :to="{ path: '/' }">home</router-link>
        </div>
        <div class="navi">
            <ul>
                <li>
                    <router-link :to="{ path: '/about' }">about</router-link>
                    <router-link :to="{ path: '/about/us' }">about1</router-link>
                </li>
            </ul>
        </div>
        <div class="util">
            <select name="" id="" @change="changeLocale" v-model="currentLocale">
                <option value="ko" selected>ko</option>
                <option value="en">en</option>
            </select>
        </div>
    </header>
</template>

<style scoped></style>
