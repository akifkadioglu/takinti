export const storage = {
    TASK: 'task',

    push(key, value) {
        localStorage.setItem(key, value)
    },
    pull(key) {
        return localStorage.getItem(key)
    }
}