//ass-1

function a(value){
    if(a==0){
        console.log(value+ " No value ")
    }
    else if(a > 0){
        console.log(value +" The value is Positive")
    }
    else{
        console.log(value+ " The value is negitive")
    }
}

a(-5);

console.log('...')
//ass-2

let b=10;
let fact = 1;
for (let i=1;i<=b;i++){
    fact = fact * i;
}
console.log(fact)

console.log('...')
//ass-3

function largervalue(num1, num2){
    if (num1 > num2){
        console.log(num1)
    }
    else{
        console.log(num2)
    }
}
largervalue(22,23)

console.log('...')
//Ass-4
function ispalindrome(str){
    let left = 0;
    let right = str.length - 1;
    while(left<right){
    if(str[left]!=str[right]){
    return false;
    }
    left++;
    right--;
    }
    return true;
}
    if(ispalindrome("madam")){
    console.log("Palindrome");
    }
    else{
    console.log("Not a Palindrome")
    }

    console.log('...')
//Ass-5
function prime_number(Number) {
    if (Number > 1) {
    let isPrime = true;
    for (let i = 2; i < Number; i++) {
    if (Number % i == 0) {
    isPrime = false;
    break;
    }
    }
if (isPrime) {
    console.log("Prime number");
} else {
    console.log("Not a prime number");
}
} else {
    console.log("Number must be greater than 1.");
 }
}
prime_number(19);

console.log('...')
//ass-6
function calculator(num1, num2, oper){
    if(oper=='+'){
    console.log(num1+num2);
    }
    else if(oper=='-'){
    console.log(num1-num2);
    }
    else if(oper=='*'){
    console.log(num1*num2);
    }
    else{
    console.log(num1/num2);
    }
}
calculator(19,44,'+');
calculator(25,9,'-');
calculator(20,5,'*');
calculator(100,25,'/');

console.log('...')

//ass-7

function vowel_count(word){
    let count=0;
    for(let i=0; i<word.length; i++){
    if(word[i]=='a'||word[i]=='e'||word[i]=='i'||word[i]=='o'||word[i]=='u'){
    count = count+1;
    }
}
console.log(count);
}
vowel_count("please");
console.log('...')

//ass-8
function perfect_num(Num){
        let sum = 0;
        for(let i=1; i<Num; i++){
        if(Num%i==0){
        sum+=i;
        }
        }
        if(Num==sum){
        console.log("Perfect Number");
        }
        else{
        console.log("Not a Perfect Number");
        }
    }
perfect_num(28);
perfect_num(81);
perfect_num(496);


//ass-9
function fibnocci_series(n){
    let fibseries = [0, 1];
    for(let i=2; i<n; i++){
    fibseries[i]=fibseries[i-1] + fibseries[i-2];
    }
    console.log(fibseries);
    }
fibnocci_series(10);

//ass=10
function mul_table(Num){
    for(let i=1; i<=10; i++){
    console.log(Num + "X" + i + "=" + Num*i);
    }
    }
mul_table(5);
    
    