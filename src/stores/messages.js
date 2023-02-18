import { defineStore } from 'pinia'

export default defineStore('messages', {
  state: () => ({
    messages: [
      { id: 1, author: 1, message: 'Hola 👀', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
      { id: 2, author: 2, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString(), channelId: 1, read: false },
      { id: 3, author: 3, message: 'Hola a todo el mundo 😊', timestamp: new Date().toLocaleTimeString(), channelId: 2, read: false },
      { id: 4, author: 3, message: '¿Cómo están?', timestamp: new Date().toLocaleTimeString(), channelId: 3, read: false },
      { id: 5, author: 1, message: 'Todo muy bien :D', timestamp: new Date().toLocaleTimeString(), channelId: 3, read: false },
      { id: 6, author: 2, message: 'Si, todo bien.', timestamp: new Date().toLocaleTimeString(), channelId: 4, read: false },
      { id: 7, author: 1, message: 'Oigan, les escribo para contarles algo... 😌', timestamp: new Date().toLocaleTimeString(), channelId: 4, read: false },
      { id: 8, author: 3, message: 'A vers 👀', timestamp: new Date().toLocaleTimeString(), channelId: 4, read: false },
      { id: 9, author: 2, message: 'Ahhhh!!', timestamp: new Date().toLocaleTimeString(), channelId: 5, read: false },
      { id: 10, author: 2, message: '¡Cuenta ese chismesito yaaaa!', timestamp: new Date().toLocaleTimeString(), channelId: 5, read: false },
      { id: 11, author: 1, message: 'Pues, ¡acabamos de lanzar los nuevos cursos de Vue.js!', timestamp: new Date().toLocaleTimeString(), channelId: 6, read: false },
    ]
  }),
  getters: {
    // Filtrado de mensajes por canal.
    findMessagesByChannelId: (state) => (channelId) => {
      return state.messages.filter((message) => message.channelId === channelId)
    },
    // Conteo de mensajes por canal, no leídos.
    countUnreadMessagesByChannelId: (state) => (channelId) => {
      return state.findMessagesByChannelId(channelId).filter((message) => message.read === false).length
    }
  },
  // En pinia se pueden definir actions.
  // Pero no mutations, las mutaciones son implicitas,
  // ya sea en los cambios de variables reactivas,
  // como dentro de una action.
  actions: {
    // Añade mensajes.
    addMessage(channelId, message) {
      // Notesé el uso de this, para poder acceder a los
      // mensajes desde el store propio del modulo,
      // dentro de una función que cumple como action.
      this.messages.push({
        id: Math.random(),
        author: 1,
        channelId,
        message,
        timestamp: new Date().toLocaleDateString(),
        read: false
      })
    }
  }
})