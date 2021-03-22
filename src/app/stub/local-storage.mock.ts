export function mockLocalStorage() {
  let store = {};

  return {
    getItem: function(key: string) {
      return store[ key ];
    },
    setItem: function(key: string, value: any) {
      store[ key ] = value.toString();
    },
    clear: function() {
      store = {};
    },
  };
}
