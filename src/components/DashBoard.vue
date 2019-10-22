<template>
    <section class="dashboard-container">
        <article class="banner-container">
            <Banner :height="350" />
        </article>

        <article class="notice-container">
        </article>
    </section>
</template>

<script>
import Banner from "./Banner";
export default {
    name: "DashBoard",
    components: {
        Banner,
    }
};
</script>

<style scoped>
.dashboard-container {
}
.banner-container {
    display: inline-block;
    width: 300px;
}
</style>
