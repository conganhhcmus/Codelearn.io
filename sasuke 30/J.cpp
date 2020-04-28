int gcd(int a, int b) {
  return b == 0 ? a : gcd(b, a % b);
}
int maximalLucky(int l1, int r1, int t1, int l2, int r2, int t2)
{
    if(t1 > t1) {
    swap(l1, l2); swap(r1, r2); swap(t1, t2);
  }

  int g = gcd(t1, t2);

  int k1 = (l2 - l1 + g - 1) / g;
  int l1k = l1 + k1 * g;
  int r1k = r1 + k1 * g;
  int best = max(0, min(r1k, r2) - max(l1k, l2) + 1);

  l1k = l1 + (k1 - 1) * g;
  r1k = r1 + (k1 - 1) * g;
  best = max(best, min(r1k, r2) - max(l1k, l2) + 1);
  return best;
}
