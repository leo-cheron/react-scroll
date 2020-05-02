import useWindowEvent from './useWindowEvent'

const useWindowResize = (cb, triggerInit = false) => useWindowEvent('resize', cb, triggerInit)

export default useWindowResize
