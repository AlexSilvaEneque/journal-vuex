import { defineAsyncComponent } from 'vue';
<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">Diciembre</span>
            <span class="mx-2 fs-4 fw-light">2022, sábado</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea
            placeholder="¿Qué sucedió hoy?"
        ></textarea>
    </div>

    <Fab 
        icon="fa-save"
    />

    <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="entry-picture"
        class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    name: 'entry-view',
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab'))
    }
}
</script>

<style lang="scss" scoped>
    textarea {
        font-size: 20px;
        border: none;
        height: 100%;

        &:focus {
            outline: none;
        }
    }

    img {
        bottom: 150px;
        box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.2);
        position: fixed;
        right: 20px;
        width: 200px;
    }
</style>