type Cb = () => void;

export const timeStore = () => {
  const subscribers = new Set<Cb>();

  let state = new Date();

  const interval = setInterval(() => {
    state = new Date();
    subscribers.forEach((sub) => sub());
  }, 1000);

  return {
    subscribe(callback: Cb) {
      subscribers.add(callback);

      return () => subscribers.delete(callback);
    },

    getSnaphhot() {
      return state.toLocaleTimeString();
    },
    getServerSnapshot() {
      return state.toLocaleTimeString();
    },
    unsubscribe() {
      clearInterval(interval);
    },
  };
};
