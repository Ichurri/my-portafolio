export async function register() {
  if (typeof window === 'undefined') {
    // Estamos en el servidor - crear un mock de localStorage
    global.localStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      key: () => null,
      length: 0,
    } as Storage;
  }
}
