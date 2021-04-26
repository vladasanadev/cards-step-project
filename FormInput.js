export default class FormInput{
    render(tp, ph, cl) {
        let input = document.createElement('input')
       input.type = tp
       input.placeholder = ph
       input.className =`${cl}`
       return input
    }
}
