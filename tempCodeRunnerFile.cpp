#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int matrixChainOrder(const vector<int>& p) {
    int n = p.size() - 1;
    vector<vector<int>> dp(n, vector<int>(n, 0));

    for (int len = 2; len <= n; ++len) {
        for (int i = 0; i <= n - len; ++i) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; ++k) {
                int cost = dp[i][k] + dp[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                }
            }
        }
    }

    return dp[0][n - 1];
}

int main() {
    int num_matrices;
    cout << "Enter the no. of matrices: ";
    cin >> num_matrices;
    
    vector<int> dimensions(num_matrices + 1);
    cout << "Enter the dimensions:" << endl;
    for (int i = 0; i <= num_matrices; ++i) {
        cout << "P" << i << ": ";
        cin >> dimensions[i];
    }

    int min_multiplications = matrixChainOrder(dimensions);
    cout << "Minimum number of multiplications is " << min_multiplications << endl;

    return 0;
}
