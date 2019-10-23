<template>
    <Markdown class="markdown-body"/>
</template>

<script>
    import Markdown from '../../data/md/test.md';
    import 'github-markdown-css';

    export default {
        name: "SpecialityDetail",
        components: {
            Markdown
        },
        props: {
            id: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style scoped>
    .markdown-body {
        text-align: left;
    }
</style>