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
            this.img = document.createElement('img');
            this.img.className = `${defaultClass}`;
            this.img.src = `${src}`;
            if (width && height) {
                this.img.width = `${width}`;
                this.img.height = `${height}`;
            };
            if (data) {
                this.img.dataset.value = `${data}`;
            };
            return this.img;
        };
    };
};
