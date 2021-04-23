export default class FormTextarea{
    render(cl, pl) {
        let textarea = document.createElement('textarea')
        textarea.classList.add(`${cl}`)
        textarea.placeholder = `${pl}`
        return textarea
    }
}
