<script setup>
import Header from './components/Header.vue'
import Container from './components/Container.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    {{ $t('title') }}
    {{ $t('title-full') }}
    {{ $t('footer.address') }}
    {{ $t('footer.copyright') }}

    <div v-text="$t('footer.copyright')"></div>

    <div id="wrap">
        <Header />
        <Container>
            <router-view></router-view>
        </Container>
        <Footer />
    </div>
</template>

<style></style>
