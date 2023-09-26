export function getSupportedEvents() {
  const support = {
    // @ts-ignore
    pointer: !!('PointerEvent' in window || 'msPointerEnabled' in window.navigator),
    touch: !!(
      typeof window.orientation !== 'undefined' ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      'ontouchstart' in window ||
      // @ts-ignore
      navigator.msMaxTouchPoints ||
      // @ts-ignore
      'maxTouchPoints' in window.navigator > 1 ||
      // @ts-ignore
      'msMaxTouchPoints' in window.navigator > 1
    ),
  }

  return support.touch
    ? { type: 'touch', start: 'touchstart', end: 'touchend', cancel: 'touchcancel', move: 'touchmove' }
    : { type: 'mouse', start: 'mousedown', end: 'mouseup', cancel: 'mouseleave', move: 'mousemove' }
}

export function eventsUnify(e: MouseEvent | TouchEvent) {
  // @ts-ignore
  return e.changedTouches ? e.changedTouches[0] : e
}
