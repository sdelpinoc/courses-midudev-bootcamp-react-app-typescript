import { Sub, SubsResponseFromApi } from '../types'

export const getAllSubs = () => {
  return fetchSubs()
    // .then(apiSubs => {
    //   const subs = mapFromApiToSubs(apiSubs)
    //   setSubs(subs)
    // })
    .then(mapFromApiToSubs)
}

// fetch
const fetchSubs = async (): Promise<SubsResponseFromApi> => {
  const res = await fetch('http://localhost:3000/subscribers')
  return await res.json()
}

// Axios
// const fetchSubs = (): Promise<SubsResponseFromApi> => {
//   return axios
//     .get('http://localhost:3000/subscribers')
//     .then(response => response.data)
// }

// Axios
// const fetchSubs = () => {
//   return axios
//     .get<SubsResponseFromApi>('http://localhost:3000/subscribers')
//     .then(response => response.data)
// }

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
  return apiResponse.map(subFromApi => {
    const {
      nick,
      months: subMonths,
      profileUrl: avatar,
      description
    } = subFromApi

    return {
      nick,
      subMonths,
      avatar,
      description
    }
  })
}
