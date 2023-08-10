export function user(name: String) {
    const userName = ref(name)
    // const dec = () => (count.value = count.value - 1);
    return {
      userName,
    };
  }