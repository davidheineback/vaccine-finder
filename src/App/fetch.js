// Module to make the fetch calls

export async function getCliniques(setCliniques, county) {
  try {
    const categories = await fetch('https://booking-api.mittvaccin.se/clinique/')
    const response = await categories.json()
    console.log(response)
    const filteredResponse = response.filter(clinique => clinique.success_redirect_booking.toLowerCase().includes(county.toLowerCase()))
    setCliniques(filteredResponse)
  } catch (error) {
    throw new Error(error)
  }
}

export async function getAppointmentTypes(setAppointmentType, station) {
  console.log(station)
  try {
    const categories = await fetch(`https://booking-api.mittvaccin.se/clinique/${station}/appointmentTypes`)
    const response = await categories.json()
    setAppointmentType(response)
  } catch (error) {
    throw new Error(error)
  }
}


