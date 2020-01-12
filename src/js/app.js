const CATEGORY_REGULAR = 'regular';
const regularProcent = 0.01;

const CATEGORY_SPECIAL = 'special';
const specialProcent = 0.3;

const CATEGORY_INCREASE = 'increase';
const increaseProcent = 0.05;

const cashbackLimit = 3000;

const purchases =[

	{
		amount: 3333,
		category: CATEGORY_REGULAR,
	},
	{
		amount: 2000,
		category: CATEGORY_INCREASE,
	},
	{
		amount: 3,
		category: CATEGORY_SPECIAL
	}
]

let cashback = 0;

for (const purchase of purchases) {
	
	cashback += purchase.amount;
	
	if (cashback > cashbackLimit)
	{
		cashback = cashbackLimit;
	}
}

console.log(cashback);















