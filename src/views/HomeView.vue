<template>
    <div class="home">
      <NotificationList :notifications="notifications" />
    </div>
  </template>
  
  <script>
  import WebSocketService from "../utils/websocket";
  import NotificationList from "../components/NotificationList.vue";
  
  export default {
    components: {
      NotificationList,
    },
    data() {
      return {
        notifications: [],
      };
    },
    mounted() {
      const wsService = WebSocketService.getInstance();
      const userId = 3; // Replace with the authenticated user ID dynamically if possible
      const wsUrl = `ws://localhost:8000/ws/notifications/${userId}/`;
      console.log(wsUrl)
  
      wsService.connect(wsUrl);
  
      wsService.addCallback("new_notification", (notification) => {
        this.notifications.unshift(notification); // Add new notification to the top
      });
    },
  };
  </script>
  
  <style>
  .home {
    margin: 16px;
  }
  </style>
  