export const useJsonP = async (path) => {
    const config = useRuntimeConfig()
    return await useFetch(() => `${config.public.baseURL}/${path}`)
  }