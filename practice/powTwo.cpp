int powTwo(long long num)
{
	long long ans = num == 1 ? 2 : 1, tmp = 1, MOD = 1000000007;
	while (num >= 2)
	{
		if (num % 2 != 0)
		{
			ans = tmp > 1 ? ans * tmp : ans * 2;
			ans = ans % MOD;
			num--;
		}
		tmp = tmp > 1 ? tmp * tmp : 4;
		tmp = tmp % MOD;
		num /= 2;
	}
	return (ans * tmp) % MOD;
}