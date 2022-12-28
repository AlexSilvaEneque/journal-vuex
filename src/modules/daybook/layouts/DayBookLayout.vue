<template>
    <navbar />

    <div class="d-flex">
        <div class="col-4">
            <entry-list />
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    name: 'day-book',
    components: {
        Navbar: defineAsyncComponent(() => import('../components/Navbar')),
        EntryList: defineAsyncComponent(() => import('../components/EntryList'))
    }
}
</script>