class WebSocketService {
    static instance = null;
    callbacks = {};
  
    static getInstance() {
      if (!WebSocketService.instance) {
        WebSocketService.instance = new WebSocketService();
      }
      return WebSocketService.instance;
    }
  
    constructor() {
      this.socketRef = null;
    }
  
    connect(wsUrl) {
      this.socketRef = new WebSocket(wsUrl);
  
      this.socketRef.onopen = () => {
        console.log("WebSocket connected");
      };
  
      this.socketRef.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log("WebSocket message received:", data);
  
        if (data.notification && this.callbacks['new_notification']) {
          this.callbacks['new_notification'](data.notification);
        }
      };
  
      this.socketRef.onclose = () => {
        console.log("WebSocket closed. Reconnecting...");
        this.connect(wsUrl);
      };
  
      this.socketRef.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    }
  
    addCallback(eventType, callback) {
      this.callbacks[eventType] = callback;
    }
  }
  
  export default WebSocketService;
  