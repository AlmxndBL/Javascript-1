// 1. แสดงข้อความ "สวัสดี ชาวโลก!"
console.log("สวัสดี ชาวโลก!");

// 2. สร้างตัวแปร myName
let myName = "สมชาย";
document.getElementById("name").innerHTML = myName;

// 3. สร้างค่าคงที่ pi
const pi = 3.14;
document.getElementById("pi").innerHTML = pi;

// 4. ประกาศตัวแปร age
let age = 20;
console.log(age);

// 5. สร้างตัวแปร isCorrect
let isCorrect = true;
alert(isCorrect);

// 6. รวมตัวเลขสองจำนวน
let num1 = 7;
let num2 = 3;
alert(num1 + num2);

// 7. ตรวจสอบจำนวนบวก
let x = 5;
let y = 10;
document.getElementById("result").innerHTML = 
    (x > 0 && y > 0) ? "ทั้งสองจำนวนเป็นค่าบวก" : "มีจำนวนที่ไม่เป็นค่าบวก";

// 8. ลดค่าตัวแปร count
let count = 5;
count--;
console.log(count);

// 9. หาเศษจากการหาร
console.log(10 % 3);

// 10. ตรวจสอบค่ามากกว่า 0
let number = 15;
if (number > 0) {
    console.log("จำนวนมากกว่า 0");
}

// 11. ตรวจสอบจำนวนคู่คี่
let num = 7;
if (num % 2 === 0) {
    console.log("จำนวนคู่");
} else {
    console.log("จำนวนคี่");
}

// 12. แสดงตัวเลข 1 ถึง 5
let output = "";
for (let i = 1; i <= 5; i++) {
    output += i + " ";
}
document.getElementById("numbers").innerHTML = output;

// 13. ตรวจสอบวันในสัปดาห์
let day = 1;
switch(day) {
    case 0: console.log("วันอาทิตย์"); break;
    case 1: console.log("วันจันทร์"); break;
    case 2: console.log("วันอังคาร"); break;
    case 3: console.log("วันพุธ"); break;
    case 4: console.log("วันพฤหัสบดี"); break;
    case 5: console.log("วันศุกร์"); break;
    case 6: console.log("วันเสาร์"); break;
    default: console.log("ไม่พบข้อมูล");
}

// 14. สร้างอาเรย์ fruits
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[1]);

// 15. สร้าง Object person
let person = {
    fullname: "John",
    age: 30,
    job: "Developer"
};
console.log("ชื่อ: " + person.fullname + ", อายุ: " + person.age);
