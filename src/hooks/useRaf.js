import {useEffect} from 'react'

const callbacks = []
let request = null
let previousTime = 0

const tick = (time) => {
	if (previousTime !== undefined) {
		const deltaTime = time - previousTime
		callbacks.forEach((cb) => cb(deltaTime))
	}
	previousTime = time
	request = window.requestAnimationFrame(tick)
}

const useRaf = (callback, prio) => {
	useEffect(() => {
		if (prio) callbacks.unshift(callback)
		else callbacks.push(callback)

		if (!request) request = window.requestAnimationFrame(tick)

		return () => {
			const index = callbacks.indexOf(callback)
			if (index !== -1) callbacks.splice(index, 1)
			if (!callbacks.length) {
				window.cancelAnimationFrame(request)
				request = null
			}
		}
	}, [callback, prio])
}

export default useRaf
