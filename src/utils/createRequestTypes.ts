const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'
export default function createRequestTypes(base: string) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc: any, type: string) => {
    acc[type] = `${base}_${type}`
    return acc
  },                                        {})
}
