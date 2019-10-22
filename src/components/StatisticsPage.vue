<template>
    <main>
        <StatisticsTable title="경쟁률 BEST 5" :table-data="bestData"/>
        <StatisticsTable title="경쟁률 WORST 5" :table-data="bestData"/>
        <StatisticsTable title="가장 많이 조회된 특기" :table-data="bestData"/>
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
                bestData: require('../../data/watching')
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