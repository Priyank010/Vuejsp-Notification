<template>
    <div class="notification-list">
      <h3>Notifications</h3>
      <ul>
        <li v-for="notification in notifications" :key="notification.id">
          <p><strong>{{ notification }}</strong></p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      notifications: {
        type: Array,
        required: true,
      },
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleString();
      },
    },
  };
  </script>
  
  <style>
  .notification-list {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
  }
  .notification-list ul {
    list-style: none;
    padding: 0;
  }
  .notification-list li {
    margin-bottom: 16px;
    border-bottom: 1px solid #eee;
    padding-bottom: 8px;
  }
  </style>
  