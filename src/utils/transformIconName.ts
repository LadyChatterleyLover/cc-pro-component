export const transformIconName = (name: string) => {
  return name.replace(/[A-Z]g/, '-$1').toLocaleLowerCase()
}