// Code By Dhruv
// Please Don't stalk me :)

#include <bits/stdc++.h>
using namespace std;

#define int long long
#define all(x) x.begin(), x.end()
#define input_vector(v) \
    for (auto &i : v)   \
        cin >> i;
#define PrintArray(a)     \
    for (auto i : a)      \
        cout << i << " "; \
    cout << endl;
#define yes cout << "YES" << endl
#define no cout << "NO" << endl

bool compare_a(int a, int b)
{
    return a < b;
}
bool compare_d(int a, int b)
{
    return a > b;
}
const long long inf = 1e18;
const int M = 1e9 + 7;

#define NeedForSpeed         \
    ios::sync_with_stdio(0); \
    cin.tie(0);              \
    cout.tie(0);

void SieveOfEratosthenes(int n, vector<bool> &prime)
{
    prime[1] = false;
    for (int p = 2; p * p <= n; p++)
    {
        if (prime[p] == true)
        {

            for (int i = p * p; i <= n; i += p)
                prime[i] = false;
        }
    }
}

void solve()
{
    int n, s;
    cin >> n >> s;
    if (s < n)
    {
        cout << -1;
        cout << endl;
        return;
    }
    if (s % 2 == 1)
    {
        cout << -1;
        cout << endl;
        return;
    }
    else if (n == 1)
    {
        cout << -1;
        cout << endl;
        return;
    }
    else if (n == 2)
    {
        if (s % 2 == 0)
        {
            cout << s / 2 << " " << s / 2;
        }
        else
        {
            cout << -1;
        }
        cout << endl;
        return;
    }
    
    vector<int>bit;
    int ts=s;
    while(ts){
        bit.push_back(ts%2);
        ts/=2;
    }
    priority_queue<int>pq;
    int temp=0;
    int mul=1;
    for(int i=bit.size()-1;i>=0;i--){
        if(bit[i]==1){
            pq.push(mul);
        }
        mul*=2;
    }
    while(pq.size()<n){
        int t=pq.top();
        if(t<=1){
            cout<<-11;
            cout<<endl;
            return ;
        }
        pq.pop();
        pq.push(t/2);
        pq.push(t/2);
    }

    cout << endl;

    return;
}

signed main()
{
    NeedForSpeed int t = 1;
    cin >> t;
    while (t--)
    {
        solve();
    }
    return 0;
}
