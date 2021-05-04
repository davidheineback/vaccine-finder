// Module to make the fetch calls

export async function getCliniques(setCliniques) {
  try {
    const categories = await fetch('https://booking-api.mittvaccin.se/clinique/')
    const response = await categories.json()
    const filteredResponse = response.filter(clinique => clinique.style.includes('region'))
    setCliniques(filteredResponse)
  } catch (error) {
    throw new Error(error)
  }
}
