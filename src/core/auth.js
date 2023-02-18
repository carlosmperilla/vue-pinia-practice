import useProfileStore from '@/stores/profile.js'

// Simulación de un login obtenido desde el backend.
const login = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: 'Usuario Estandar'
      })
    }, 2500)
  })
}

export const main = async () => {
  // Obtenemos el perfil desde Pinia.
  const profileStore = useProfileStore()
  const user = await login()
  console.log(user)
  // Usamos el nombre de usuario del backend para el store Profile actual.
  profileStore.username = user.username
  profileStore.status = 'active'
}
