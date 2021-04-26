export default class FormSelect{
    render(arr) {
        let select = document.createElement('select')
        arr.forEach(element => {
            let option = document.createElement('option')
            option.className = element.cl
            option.textContent = `${element.text}`
            select.append(option)
            });
        return select
    }
}
