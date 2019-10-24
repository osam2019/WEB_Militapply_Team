<template>
    <main>
        <StatisticsTable title="경쟁률 BEST 5" :table-data="bestData" :value="(data) => data.competitiveRate + ' : 1'"/>
        <StatisticsTable title="경쟁률 WORST 5" :table-data="worstData" :value="(data) => data.competitiveRate + ' : 1'"/>
        <StatisticsTable title="가장 많이 조회된 특기" :table-data="watchingData"/>
    </main>
</template>

<script>

    import StatisticsTable from "./StatisticsTable";

    export default {
        name: "StatisticsPage",
        components: {
            StatisticsTable
        },
        data() {
            return {
                bestData: [],
                worstData: [],
                watchingData: []
            }
        },
        mounted() {
            this.getWatchingData();
            this.getBestData();
            this.getWorstData();
        },
        methods: {

            getWatchingData() {
                this.$http.get(`/watching?_sort=value&_order=desc&_start=0&_end=5`).then(response => {
                    this.watchingData = response.data;
                });
            },
            getBestData() {
                this.$http.get(`/specialities?_sort=competitiveRate&_order=desc&_end=5`).then(response => {
                    this.bestData = response.data;
                });
            },
            getWorstData() {
                this.$http.get(`/specialities?_sort=competitiveRate&_order=asc&_end=5`).then(response => {
                    this.worstData = response.data;
                });
            }
        }
    }
</script>

<style scoped>
    main {
        width: 800px;
        margin: 0 auto;
    }

    .stats-table-container {
        margin: 30px auto;
    }
</style>