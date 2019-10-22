<template>
  <FullCalendar
    defaultView="dayGridMonth"
    :weekends="false"
    :plugins="calendarPlugins"
    :events="events"
    locale="ko"
  />
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import listPlugin from "@fullcalendar/daygrid";

export default {
  name: "Schedule",
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarPlugins: [listPlugin],
      events: require("../../data/events"),
      footer: {
        left: "title",
        center: "",
        right: "today prev,next"
      }
    };
  }
};
</script>

<style scoped>
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";

.fc-toolbar .fc-header-toolbar {
  font-size: 12px;
}
</style>
