export default class ElementImg{
    constructor(cl, s, data, w, h){
        this.elements = {
            defaultClass: cl,
            src: s,
            width: w,
            height: h,
        };
        this.render = () => {
            const {defaultClass, src, width, height} = this.elements;
            let img = document.createElement('img');
            img.className = `${defaultClass}`;
            img.src = `${src}`;
            if (width && height) {
                img.width = `${width}`;
                img.height = `${height}`;
            };
            if (data) {
                btn.dataset.value = `${data}`;
            };
            return img;
        };
    };
};

// const elementImg = new ElementImg('img', `https://st2.depositphotos.com/4285045/7260/i/600/depositphotos_72609979-stock-photo-ojos-de-gata.jpg`, 100, 200).render()
// const elementImg = new ElementImg('img', `https://st2.depositphotos.com/4285045/7260/i/600/depositphotos_72609979-stock-photo-ojos-de-gata.jpg`).render()
// new ElementImg('img', `https://st2.depositphotos.com/4285045/7260/i/600/depositphotos_72609979-stock-photo-ojos-de-gata.jpg`, 100, 200).render()
// new ElementImg('img', `https://st2.depositphotos.com/4285045/7260/i/600/depositphotos_72609979-stock-photo-ojos-de-gata.jpg`).render()