bool twoPolygons(int n, int m)
{
    if (m<3 || n==m) return false;
    return n%m==0;
}
