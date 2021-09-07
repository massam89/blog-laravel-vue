<template>
    <footer class="py-5">
        <div class="d-flex justify-content-between py-4 my-4 border-top">
            <p>&copy; {{ year }} <a class="link-primary text-dark" href="https://masoudsam.com">Masoud Sam</a> , Inc. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            year : new Date().getFullYear()
        }
    }
}
</script>