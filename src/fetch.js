// Module to make the fetch calls

export async function getCliniques(setCliniques, city) {
  try {
    const categories = await fetch('https://booking-api.mittvaccin.se/clinique/')
    const response = await categories.json()
    const filteredResponse = response.filter(clinique => clinique.style.includes('region') && clinique.city.toLowerCase().includes(city.toLowerCase()))
    setCliniques(filteredResponse)
  } catch (error) {
    throw new Error(error)
  }
}

export async function getAppointmentTypes(setAppointmentType, station) {
  try {
    const categories = await fetch(`https://booking-api.mittvaccin.se/clinique/${station}/appointmentTypes`)
    const response = await categories.json()
    setAppointmentType(response)
  } catch (error) {
    throw new Error(error)
  }
}


