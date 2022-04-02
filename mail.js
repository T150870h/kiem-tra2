class Main {
    constructor() {
        this.$container = document.createElement('div');
        this.$container.setAttribute('class', 'mt-64 ml-96');
        this.$text = document.createElement('span')
        this.$text.setAttribute('class', 'text-white mr-2 text-3xl ');
        this.$text.innerHTML = 'The';

        this.$text1 = document.createElement('span')
        this.$text1.setAttribute('class','text-white mr-2 text-3xl')
        this.$text1.innerHTML = 'privacy-friendly';

        this.$text2 = document.createElement('span')
        this.$text2.setAttribute('class','text-white mr-2 text-3xl')
        this.$text2.innerHTML = 'URL shortener';

    }
    render() {
        this.$container.appendChild(this.$text);
        this.$container.appendChild(this.$text1);
        this.$container.appendChild(this.$text2);
            return this.$container;
    }
}
export default Main;