<template>
    <div class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry-view', params: { id: 1 } })"
    >
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">3</span>
            <span class="mx-1 fs-5">Diciembre</span>
            <span class="mx-1 fw-light">2022</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta excepturi eos cum voluptate recusandae tenetur delectus amet, rem dolorem veritatis praesentium totam doloribus sint quidem illum, est eaque consequuntur.
        </div>
    </div>
</template>

<script>
export default {
    name: 'db-entry'
}

</script>

<style lang="scss" scoped>
    .entry-container {
        border-bottom: 1px solid #2c3e50;
        transition: .2s all ease-in;

        &:hover {
            background-color: lighten($color: grey, $amount: 45);
        }

        .entry-description {
            font-size: 12px;
        }
    }
</style>