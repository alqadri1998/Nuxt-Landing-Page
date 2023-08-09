export const useMyFetch = (request, opts) => {
    const config = useRuntimeConfig()
  
    return useFetch(request, { baseURL: config.public.baseURL, ...opts })
  }
// export const useJsonP = async (path) => {
//     return await useFetch(() => `https://jsonplaceholder.typicode.com/${path}`)
//   }