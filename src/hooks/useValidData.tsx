type useValidDataType = <T>(data: T) => T

export const useValidData: useValidDataType = (data) => {
   if (!data) throw new Error('Data is not valid')
   return data
}
