<template>
    <h1>Home</h1>
    <button class="btn btn-primary" @click="goToDayBook">Button 1</button>
</template>

<script>
export default {
    name: 'my-home',

    methods: {
        goToDayBook() {
            this.$router.push({ name: 'no-entry' })
        }
    }
}
</script>