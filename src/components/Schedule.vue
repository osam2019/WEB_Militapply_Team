<template>
  <FullCalendar
    defaultView="dayGridMonth"
    :display-event-time="false"
    :weekends="false"
    :plugins="calendarPlugins"
    :events="coloredEvents"
    :event-render="onRender"
    locale="ko"
  />
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import listPlugin from "@fullcalendar/daygrid";
import "popper.js";
import Tooltip from "tooltip.js";

export default {
  name: "Schedule",
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarPlugins: [listPlugin],
      events: [],
      footer: {
        left: "title",
        center: "",
        right: "today prev,next"
      }
    };
  },
  methods: {
    onRender(info) {
      new Tooltip(info.el, {
        title: info.event.extendedProps.description,
        placement: "top",
        trigger: "hover",
        container: "body"
      });
    },
    genColor(seed) {
      let color = Math.floor(Math.abs(Math.sin(seed) * 16777215) % 16777215);
      color = color.toString(16);
      // pad any colors shorter than 6 characters with leading 0s
      while (color.length < 6) {
        color = "0" + color;
      }

      return "#" + color;
    },
    getEvents() {
      this.$http.get(`/events`).then(response => {
        this.events = response.data;
      });
    }
  },
  mounted() {
    this.getEvents();
  },
  computed: {
    coloredEvents() {
      return this.events.map(c => {
        const ret = { ...c };
        ret.backgroundColor = this.genColor(ret.group);
        return ret;
      });
    }
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
