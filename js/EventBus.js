class EventBus {
  // 构造函数
  constructor() {
    this.events = {};
  }

  // 订阅事件
  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event].push(callback);
    } else {
      this.events[event] = [callback];
    }
  }

  // 发布事件
  publish(event, ...args) {
    const subscribedEvents = this.events[event];
    (subscribedEvents || []).forEach((callback) =>
      callback.call(this, ...args)
    );
  }

  // 取消事件
  unsubscribe(event,callback){
    const subscribedEvents = this.events[event];
    if(subscribedEvents?.length) {
      this.events[event] = subscribedEvents.filter(cb => cb !== callback);
    }
  }
}
