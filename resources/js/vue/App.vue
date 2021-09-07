<template>
    <div class="container">
        <Header />
        <button @click="changeShow()" :class="[showAddPost ? 'btn-danger' : 'btn-primary', 'btn mt-3']">{{ showAddPost ? 'Close' : 'Add Post' }}</button>
        <AddPost v-show="showAddPost" v-on:reloadlist="getList()" />
        <ListPost :posts="posts"/>
        <Footer />
    </div>  
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import AddPost from './components/AddPost.vue'
import ListPost from './components/ListPost.vue'

export default {
    components: {
        Header,
        Footer,
        AddPost,
        ListPost
    },
    data() {
        return {
            posts: [],
            showAddPost: false
        }
    },
    methods: {
        getList() {
            axios.get('/api/posts')
            .then(response => {
                this.posts = response.data
                if(this.showAddPost){
                    this.changeShow()
                } 
            })
            .catch(err => console.log(err))
        },
        changeShow() {
            this.showAddPost = !this.showAddPost;
        }
    },
    created() {
        this.getList();
    }
}
</script>

<style scoped>

</style>