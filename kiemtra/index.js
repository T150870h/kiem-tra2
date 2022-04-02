// Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.
// console.log("Bài 1");
// const INPUT = [2, 3, -5, -2, 4];
// for (let i = 0; i < INPUT.length; i++) {
//     for (let j = i + 1; j < INPUT.length; j++) {
//         if (INPUT[i] * INPUT[j] > INPUT[i + 1] * INPUT[j + 1]) {
//             const newInput = INPUT[i] * INPUT[j]
//             console.log(newInput);
//         }
//     }
// }
//Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.
// console.log('bai 2');
// const Input = [60, 40, 55, 75, 64];
// const team1 = [60, 55, 64];
// var [a, b, c] = team1;
// console.log(a + b + c);
// const team2 = [40, 75];
// var [d, e] = team2;
// console.log(d + e);

// cách 2
// const Input = [60, 40, 55, 75, 64];
// let Input1 = [];
// let Input2 = [];
// const tong1 = 0; const tong2 = 0;

// for (let i = 0; i < Input.length; i++) {
//     if (i % 2 == 0) {
//         Input1.push(Input[i]);
//     } else {
//         Input2.push(Input[i]);
//     }
// }
//    for (let j = 0; j < Input1.length; j++) {
//     tong1 = tong1 + Input1[k];
// }
//    console.log("Cân nặng nhóm 1 " + tong1);

// for (let e = 0; e < Input2.length; h++) {
//     tong2 = tong2 + Input2[h];
// }
//     console.log("Cân nặng nhóm 2: " + tong2);


// Xây dựng website rút gọn link từ API cho sẵn (đọc tài liệu sau để lấy API: https://shrtco.de/docs/), Các chức năng như trong video minh hoạ https://youtu.be/hhdiS8TGiPQ
import Main from "../mail.js";
import Login from "./login.js";
//    const Main1 = new Main();
    class Component{
        container() {
            this.$container = document.createElement('div');
            this.$Main1 = new Main();
            this.$Login1 = new Login();
        }
        render() {
            this.$container.appendChild(this.$Main1.render());
            this.$container.appendChild(this.$Login1.render());
            return this.$container;
        }
    }
    const main = document.getElementById('root');
    const view = new Component();
     main.appendChild(view);




// function API() {
//     fetch('https://api.shrtco.de/v2/').then((res) => {
//         console.log(res);
//         return res.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }
// API();


