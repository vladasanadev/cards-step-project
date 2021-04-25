export default class FormTextarea{
    render(cl, pl) {
        let textarea = document.createElement('textarea')
        textarea.className = `${cl}`
        textarea.placeholder = `${pl}`
        return textarea
    }
}
