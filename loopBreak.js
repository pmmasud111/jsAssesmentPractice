// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।

function arry(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element >= 1) {
      sum = element + sum;
    } else {
      break;
    }
  }
  return sum;
}
const numbers = [
  5, 9, 41, 56, 4, 32, 47, 5, -78, 3, 54, 65, 95, 87, 79, 54, 78, 4545, 545,
  545, 8784, 5445, 6554, 543,
];

const result = arry(numbers);
console.log(result);
