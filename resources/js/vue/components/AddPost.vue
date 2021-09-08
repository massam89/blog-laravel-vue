<template>
    <form class="mt-3 w-50 m-auto">
        <div class="mb-3">
            <label class="form-check-label" for="author">Post author name:</label>
            <input type="text" class="form-control" id="author" v-model="post.author">
        </div>
        <div class="mb-3">
            <label for="title" class="form-label">Post title:</label>
            <input type="text" class="form-control"  id="title" v-model="post.title">
        </div>
        <div class="mb-3">
            <label for="text" class="form-label">Post text:</label>
            <textarea class="form-control" id="text" v-model="post.text"></textarea>
        </div>
        <p class="btn btn-primary" @click="addPost()">add post</p>
</form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                author: '',
                text: ''
            }
        }
    },
    methods: {
        addPost() {

            if(this.post.author == '') {
                return;
            }

            this.$emit('changeShowLoading');
            
            axios.post('api/posts', {
                post: this.post
            })
            .then(response => {
                if(response.status == 201) {
                    this.post.title = '';
                    this.post.author = '';
                    this.post.text = '';

                    this.$emit('reloadlist');
                }
            })
            .catch(err => console.log(err))
        }
    }
}
</script>