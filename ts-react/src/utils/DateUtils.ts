export const localDateString = (date: number | undefined): string => {
  if (!date) {
    return ''
  }

  return new Date(date).toLocaleString()
}