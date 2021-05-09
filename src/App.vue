<template>
    <v-app>
        <IndexNavigation></IndexNavigation>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import IndexNavigation from '@/components/IndexNavigation';

export default {
    name: 'App',
    components: {
        IndexNavigation
    }
};
</script>

<style>
</style>
