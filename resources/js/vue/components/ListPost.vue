<template>
   <div class="row mt-4">
        <div v-for="(post, index) in posts" :key="index" class="col-sm-6">
            <EachPost :post="post" />
        </div>
    </div>
</template>

<script>
import EachPost from './EachPost.vue'

export default {
    components: {
        EachPost
    },
    props: ['posts']
}
</script>