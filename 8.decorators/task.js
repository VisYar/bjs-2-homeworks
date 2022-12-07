function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    const objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }
    let result = func(...args);
    cache.push({ hash, value: result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

function debounceDecoratorNew(func, delay) {
  let timeout = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++;
    if (timeout === null) {
      func(...args);
      wrapper.count++;
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);
  }
  return wrapper;
}
