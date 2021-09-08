<template>
    <div class="card mb-3">
        <div type="button"  class="card-body" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + post.id">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.text }}</p>
        </div>

        <!-- modal -->
        <div class="modal fade" :id="'exampleModal' + post.id" tabindex="-1" :aria-labelledby="'exampleModalLabel' + post.id" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <h4 class="modal-title" :id="'exampleModalLabel' + post.id">{{ post.title }}</h4>
                <h5 class="modal-title" :id="'exampleModalLabel' + post.id">{{ post.author }}</h5>
                <h6 class="modal-title" :id="'exampleModalLabel' + post.id">{{ post.created_at | formatDate}}</h6>
                
            </div>
            <div class="modal-body">
                {{ post.text }}
            </div>
            <div class="modal-footer mx-auto">
                <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                <button @click="removePost()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
 
<script>

export default {
    props: ['post'],
    methods: {
        async removePost() {
            this.$emit('changeShowLoading');
            await axios.delete(`/api/posts/${this.post.id}`);
            this.$emit('reloadlist');
        }
    }
}
</script>

<style scoped>
 p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
 }

 .modal-header {
     flex-direction: column;
 }

 .modal-body {
     text-align: justify;
 }

</style>