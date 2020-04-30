// package Codelearn.io.practice;

public class maxArea {
    public static long _maxArea(int[] a) {
        long ans = 0;
        for (int i = 0; i < a.length; i++) {
            long min = 0;
            for (int j = i + 1; j < a.length; j++) {
                if (a[j] < min)
                    min = a[j];
                long tmp = (j - i) * min;
                if (tmp > ans)
                    ans = tmp;
            }
        }
        return ans;
    }
}