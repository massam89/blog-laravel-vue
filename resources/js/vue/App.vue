<template>
    <div class="container">
        <Header />
        <button @click="changeShow()" :class="[showAddPost ? 'btn-danger' : 'btn-primary', 'btn mt-3']">{{ showAddPost ? 'Close' : 'Add Post' }}</button>
        <AddPost v-show="showAddPost" v-on:reloadlist="getList()" v-on:changeShowLoading="changeShowLoading()" />
        <ListPost :posts="posts" v-on:reloadlist="getList()" v-on:changeShowLoading="changeShowLoading()"/>
        <div v-show="showLoading" class="loading">
            <Loading  />
        </div>
        
        <Footer />
    </div>  
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import AddPost from './components/AddPost.vue'
import ListPost from './components/ListPost.vue'
import Loading from './components/Loading.vue'

export default {
    components: {
        Header,
        Footer,
        AddPost,
        ListPost,
        Loading
    },
    data() {
        return {
            posts: [],
            showAddPost: false,
            showLoading: true
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
                this.changeShowLoading();
            })
            .catch(err => console.log(err))
        },
        changeShow() {
            this.showAddPost = !this.showAddPost;
        },
        changeShowLoading() {
            this.showLoading = !this.showLoading;
        }
    },
    created() {
        this.getList();
    }
}
</script>

<style scoped>
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(49, 41, 41, 0.5);
        width: 100%;
        height: 100%;
    }
</style>