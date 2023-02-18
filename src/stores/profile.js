// Me permite definir un Store,
// Dandole de argumento un json,
// de configuración.
import { defineStore } from 'pinia'

// Cuando es global la convención es
// usar el nombre 'main',
// al ser especifico, le ponemos
// el nombre del modulo: 'profile'.
export default defineStore('profile', {
  // Recordar que con la arrow-function
  // el return es implicito.
  state: () => ({
    id: 1,
    username: '',
    avatar: '/avatars/avatar.jpg',
    status: null
  })
})