#!/usr/bin/env node

var fs = require('fs');
var file = "primes.txt";

var current_number = 1;
var prime_numbers = [];

var check_primeness = function(n)
{
	var prime = true;

	for(var m = 2; m < n; m++)
	{
		if(n % m === 0)
		{
			prime = false;
			break;
		}
	}
	return prime;
}

for(var i = 0; i < 100; i++, current_number++)
{
	if(check_primeness(current_number))
		prime_numbers.push(current_number);
	else
		i--;
}

console.log(prime_numbers.toString());
fs.writeFileSync(file, prime_numbers.toString());
