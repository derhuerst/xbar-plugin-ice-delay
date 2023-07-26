import portalClient from 'wifi-on-ice-portal-client'
const {journey} = portalClient
import humanizeMs from 'pretty-ms'

const UNKNOWN = '?'

const renderDelay = (delay) => {
	const sign = delay < 0 ? '-' : '+'
	const amount = humanizeMs(delay * 1000, {
		unitCount: delay > 60 * 60 ? 2 : 1,
	})
	return sign + amount
}

const printIceDelayInXbarFormat = async () => {
	let stopovers = []
	try {
		const res = await journey()
		stopovers = res.passed
	} catch (err) {
		// we hit the iceportal.de info website *outside* of the ICE
		if (err?.statusCode === 404) return UNKNOWN
		// DNS failed to resolve iceportal.de
		if (err?.code === 'ENOTFOUND') return UNKNOWN
		throw err
	}

	const upcomingSt = stopovers.find(st => st.passed === false)
	const upcomingDelay = Number.isInteger(upcomingSt?.arrivalDelay)
		? renderDelay(upcomingSt.arrivalDelay)
		: UNKNOWN

	return [
		upcomingDelay,
		'---',
		...(
			stopovers
			.filter(st => st.passed === false)
			.map((st) => {
				const delay = Number.isInteger(st.arrivalDelay)
					? renderDelay(st.arrivalDelay)
					: UNKNOWN
				return `${st.station?.name} ${delay}`
			})
		),
	].join('\n')
}

export {
	printIceDelayInXbarFormat,
}
