import FormSelect from "./ElementSelect.js"
import FormInput from "./ElementInput.js"


export default class FilterForm{
    constructor(parent) {
        this.parent = parent,
            this.inputTitle = new FormInput()
        this.dueDateSelector = new FormSelect()
        this.prioritySelector = new FormSelect()
        this.form = document.createElement('form'), //REMOVE AFTER TIM CHANGE FORM CLASS
        this.button = document.createElement("button")
        this.cards = data.map(el => {
            el.data = "2010-12-17T03:24:00",
            el.priority = "low"
            return el
        }) //SWITCH FOR THE REAL CARDS ARRAY FROM ANDREW
    }

    filterHandler(e, inpt, date, priority) {
        e.preventDefault()
        const {cards, inputTitle, dueDateSelector, prioritySelector } = this;

        cards.forEach(card => {
            // console.log(card, new Date(), new Date(card?.data), date.value, priority.value)
            const status = new Date() < new Date(card?.data)? "open" : "done";
            if (inpt.value)
            {
            if (card.title === inpt.value && card.priority === priority.value && status === date.value)
            {
                console.log(card, "Here")
            }
            }
            else  if (card.priority === priority.value && status === date.value)
            {
                console.log(card, "Here222")
            }

        })


    }

    render()
    {

        const {parent, form, inputTitle, dueDate, prioritySelector, button, dueDateSelector} = this;
        button.innerHTML = "SEARCH"
        console.log(inputTitle);
       const inpt = inputTitle.render("text", "Card name", "")
        console.log(inpt);
        const date = dueDateSelector.render([{cl:"classname", text:"done"}, {cl:"classname", text:"open"}])
        const priority = prioritySelector.render([{cl:"classname", text:"high"}, {cl:"classname", text:"normal"}, {cl:"classname", text:"low"}])
        form.append(inpt,date,priority, button)
       parent.append(form);

        button.addEventListener("click", (e) => this.filterHandler(e, inpt, date, priority))
    }
}

const data =[
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "data" : "24.02.2010",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14565
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14566
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14595
    },
    {
        "title": "sggsd",
        "data" : "24.02.2020",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14596
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14594
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14590
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14606
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14607
    },
    {
        "title": "",
        "description": "",
        "doctor": "Терапевт",
        "fullName": "",
        "id": 14551
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14569
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14570
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14571
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14572
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14573
    },
    {
        "title": "gssg",
        "description": "hdh",
        "doctor": "Стоматолог",
        "order": "Приоритетная",
        "fullName": "dfhfdh",
        "id": 14592
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14593
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14579
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14580
    },
    {
        "title": "",
        "description": "",
        "doctor": "Стоматолог",
        "fullName": "",
        "id": 14555
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14582
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14585
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14576
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14583
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14584
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14568
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14586
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14587
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14578
    },
    {
        "title": "Визит к доктору",
        "description": "",
        "doctor": "Стоматолог",
        "fullName": "Дученко Тимур",
        "id": 14552
    },
    {
        "title": "",
        "description": "",
        "doctor": "Стоматолог",
        "fullName": "",
        "id": 14550
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14567
    },
    {
        "title": "",
        "description": "",
        "doctor": "Стоматолог",
        "fullName": "",
        "id": 14554
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14564
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14563
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14558
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14559
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14560
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14561
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14562
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14598
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14599
    },
    {
        "title": "gds",
        "description": "dgd",
        "doctor": "Терапевт",
        "order": "--Сделайте вибор--",
        "fullName": "gdgd",
        "id": 14613
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14608
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14601
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14603
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14611
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14612
    },
    {
        "title": "gssg",
        "description": "hdh",
        "doctor": "Стоматолог",
        "order": "Приоритетная",
        "fullName": "dfhfdh",
        "id": 14591
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14609
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14610
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14577
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14588
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14589
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14574
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14575
    },
    {
        "title": "saad",
        "description": "adasd",
        "doctor": "Кардиолог",
        "order": "Приоритетная",
        "fullName": "ads",
        "id": 14927
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14604
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14605
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14600
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14602
    },
    {
        "title": "asass",
        "description": "fhhdjfgj",
        "doctor": "Кардиолог",
        "fullName": "ghdhhd",
        "id": 14581
    },
    {
        "title": "sggsd",
        "description": "gdgsdg",
        "doctor": "Терапевт",
        "order": "Приоритетная",
        "fullName": "gdgdgd",
        "id": 14597
    },
    {
        "title": "Визит к доктору",
        "description": "Тест скрипта",
        "doctor": "Стоматолог",
        "fullName": "Дученко Тимур",
        "id": 14553
    }
]
