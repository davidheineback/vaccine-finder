// Module to make the fetch calls

export async function getCliniques (setCliniques, county) {
  try {
    const categories = await fetch('https://booking-api.mittvaccin.se/clinique/')
    const response = await categories.json()
    console.log(response)
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
    throw new Error(error)
  }
}

export async function getAvailableTimes(station, dateFrom, dateTo) {
  const allTimes = await fetch(`https://booking-api.mittvaccin.se/clinique/${station.id}/appointments/${station.response[0].id}/slots/${dateFrom}-${dateTo}`)
  const response = await allTimes.json()
  console.log(response)
  const available = response.filter(date => date.slots.available)
  console.log(available)
  return available
}
