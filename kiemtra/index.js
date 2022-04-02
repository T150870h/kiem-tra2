

// Xây dựng website rút gọn link từ API cho sẵn (đọc tài liệu sau để lấy API: https://shrtco.de/docs/), Các chức năng như trong video minh hoạ https://youtu.be/hhdiS8TGiPQ
import Main from "../mail.js";
class view {
    constructor() {
          this.$container = document.createElement('div');
          this.$mail = new Main();
    }
    render() {
        this.$container.appendChild(this.$mail.render());
        return this.$container; 
    }
}
const main = document.getElementById('root');
const view1 = new view();
main.appendChild(view1.render());






// function API() {
//     fetch('https://api.shrtco.de/v2/').then((res) => {
//         console.log(res);
//         return res.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }
// API();


