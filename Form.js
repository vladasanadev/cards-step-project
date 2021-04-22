class Form{
    constructor(value, deleteItem, token){
        this.value = value;
        this.deleteItem = deleteItem;
        this.token = token;
        this.elements = {
            body: document.querySelector('body'),
            self: document.createElement('div'),
            form: document.createElement('form'),
            title: document.createElement('h3'),
            purpose: document.createElement('input'),
            shortInfo: document.createElement('textarea'),
            select: document.createElement('select'),
            makeChoice: document.createElement('option'),
            common: document.createElement('option'),
            priority: document.createElement('option'),
            urgent: document.createElement('option'),
            indefic: document.createElement('input'),
            btn: document.createElement('button')
        }
    }

    elementCreater() {
        const {self, form, title, purpose, shortInfo, select, makeChoice, common, priority, urgent, indefic, btn} = this.elements;
        self.classList.add(`form-wrapper`)
        form.classList.add(`form-create-user`)
        title.classList.add(`form-create-user__title`)
        purpose.classList.add(`form-create-user__purpose`)
        shortInfo.classList.add(`form-create-user__shortinfo`)
        select.classList.add(`select-urgency-order`)
        indefic.classList.add(`form-create-user__indefic`)
        btn.classList.add(`form-create-user__btn`)

        purpose.type = 'text'
        indefic.type = 'text'
        btn.type = 'submit'

        purpose.placeholder = 'Цель визита'
        shortInfo.placeholder = 'Краткая инфомация'
        indefic.placeholder = 'ФИО'

        title.textContent = 'Создать карту визита'
        btn.textContent = 'Создать визит'
        makeChoice.textContent = `--Сделайте вибор--`
        common.textContent = 'Обычная'
        priority.textContent = 'Приоритетная'
        urgent.textContent = 'Неотложная'
    }

    async render() {
        this.deleteItem.remove()
        const {body, self, form, title, purpose, shortInfo, select, makeChoice, common, priority, urgent, indefic, btn} = this.elements;
        this.elementCreater()
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            fetch("https://ajax.test-danit.com/api/v2/cards", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
              },
              body: JSON.stringify({
                title: `${purpose.value}`,
                description: `${shortInfo.value}`,
                doctor: `${this.value}`,
                fullName: `${indefic.value}`
              })
            })
            .then(res => res.json())
            .then(response => console.log(response))
        })

        select.append(makeChoice, common, priority, urgent)
        form.append(title, purpose, shortInfo, select, indefic, btn)
        self.append(form)
        body.append(self)
    }

}