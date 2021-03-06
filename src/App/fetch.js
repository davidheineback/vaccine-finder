// Module to make the fetch calls

export async function getCliniques (setCliniques, county) {
  try {
    const categories = await fetch('https://booking-api.mittvaccin.se/clinique/')
    const response = await categories.json()
    const filteredResponse = response.filter(clinique => clinique.style.toLowerCase().includes(county.toLowerCase()))
    setCliniques(filteredResponse)
  } catch (error) {
    throw new Error(error)
  }
}

export async function getAppointmentTypes (station) {
  try {
      const categories = await fetch(`https://booking-api.mittvaccin.se/clinique/${station}/appointmentTypes`)
      const response = await categories.json()
      return response
  } catch (error) {
    console.log(error.status)
    throw new Error(error)
  }
}

export async function getAvailableTimes(station, dateFrom, dateTo) {
  if (station.response.length > 0) {
    const allTimes = await fetch(`https://booking-api.mittvaccin.se/clinique/${station.id}/appointments/${station.response[0].id}/slots/${dateFrom}-${dateTo}`)
    const response = await allTimes.json()
    const available = response.filter(date => date.slots.length > 0)
    return available
  } else {
    return []
  }
}
