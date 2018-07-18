// 1


var firstname = ['maria', 'joao', 'jose'];
var interest = ['cooking', 'politic', 'rocking balance'];
var hobby = ['capoeira', 'soccer', 'pool'];
var awesomeMessage = '';

for (var i=0; i<=2; i++){
  awesomeMessage = "Hi, my name is "+ firstname[i] +". I love " + interest[i] +". In my spare time, I like to play " + hobby[i] +"."
  console.log(awesomeMessage);
}

// 2
var musicians = 4;

switch (musicians) {
    case -1:
        result = "not a group";
        break;
    case 0:
        result = "not a group";
        break;
    case 1:
        result = "solo";
        break;
    case 2:
        result = "duet";
        break;
    case 3:
        result = "trio";
        break;
    case 4:
        result = "quartet";
        break;
    default:
        result = "this is a large group";
}

// 3

var fileira = 25;
var assento = 99;

for (var i=0; i<=fileira; i++){
	for (var j=0; j<=assento; j++){
		console.log(i + "-" + j);
    }
}

// 4

for (var i=0; i<=20; i++){
	if (i % 3 === 0 && i % 5 === 0){
		console.log("JuliaJames");
    }
	else if (i % 3 === 0){
		console.log("Julia");
    }
	else if (i % 5 === 0){
		console.log("James");
    }
	else console.log(i);
}

// 5

function laught(num){
	var result = "";
	for (i=0; i<num; i++){
		result += "ha";
    }
	return result;
}
console.log(laught(3));

// 6
var numbers = [
 [ 243, 12, 23, 12, 45, 45, 78, 66, 223, 3 ],
 [ 34, 2, 1, 553, 23, 4, 66, 23, 4, 55 ],
 [ 67, 56, 45, 553, 44, 55, 5, 428, 452, 3 ],
 [ 12, 31, 55, 445, 79, 44, 674, 224, 4, 21 ],
 [ 4, 2, 3, 52, 13, 51, 44, 1, 67, 5 ],
 [ 5, 65, 4, 5, 5, 6, 5, 43, 23, 4424 ],
 [ 74, 532, 6, 7, 35, 17, 89, 43, 43, 66 ],
 [ 53, 6, 89, 10, 23, 52, 111, 44, 109, 80 ],
 [ 67, 6, 53, 537, 2, 168, 16, 2, 1, 8 ],
 [ 76, 7, 9, 6, 3, 73, 77, 100, 56, 100 ]
];
for (var i=0; i<numbers.length; i++){
	for (var j=0; j<numbers[i].length; j++){
		numbers[i][j] % 2 === 0 ? numbers[i][j] = "even" : numbers[i][j] = "odd";
    }
}
console.log(numbers);

// 7


// 7


var savingsAccount = {
	balance: 1000,
	interestRatePercent: 1,
	deposit: function addMoney(amount) {
		if (amount > 0) {
			savingsAccount.balance += amount;
		}
 	},
	withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        	if (amount > 0 && verifyBalance >= 0) {
            		savingsAccount.balance -= amount;
        	}
    	},
    summary: function printAccountSummary(){
        console.log("Welcome!\nYour Balance currently is $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + " %");
    }
};

function testAccount(){
  	console.log("Initial amount");
	savingsAccount.summary();
	savingsAccount.deposit(100);
  	savingsAccount.withdraw(250);
  	console.log("====================================================================");
	savingsAccount.summary();
  	console.log("====================================================================");
  	savingsAccount.withdraw(500);
	savingsAccount.deposit(25);
	savingsAccount.summary();
}

testAccount();
