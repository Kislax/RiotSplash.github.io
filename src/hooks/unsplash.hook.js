// import {useState, useCallback} from 'react'
//
//
//
//
//
//
// export const useHttp = () => {
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState(null)
//
//     const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
//         setLoading(true)
//         try {
//             if (body) {
//                 body = JSON.stringify(body)
//                 headers['Content-Type'] = 'application/json'
//             }
//
//             const response = await fetch(url, {method, body, headers})
//             const data = await response.json()
//
//             if (!response.ok) {
//                 throw new Error(data.message || 'Что-то пошло не так')
//             }
//
//             setLoading(false)
//
//             return data
//         } catch (e) {
//             setLoading(false)
//             setError(e.message)
//             throw e
//         }
//     }, [])
//
//     const clearError = useCallback(() => setError(null), [])
//
//     return { loading, request, error, clearError }
// }
//
// //====================================================================//=====
// const SendSMSHandler = async (phone, command) => {
//     try {
//         console.log("sms", phone, command)
//         const smsPush = await request('/api/wialon/sendSMS', 'post', {phone, command}, {
//             Authorization: `Bearer ${token}`
//         })
//         message(smsPush.message)
//         console.log(smsPush)
//         setDelivSMS(smsPush)
//     } catch (e) {
//     }
// }


fetch('https://api.unsplash.com/photos/?client_id=AFDhwv8KgCPMlQv3LwMNtoGBh10JcgxBvEcZ-G3Jc8w').then(response => response.json())
        .then(commits => console.log(commits[0]));