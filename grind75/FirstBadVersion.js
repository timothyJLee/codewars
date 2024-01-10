/*
278. First Bad Version
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example 1:
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

Example 2:
Input: n = 1, bad = 1
Output: 1

Constraints:
1 <= bad <= n <= 231 - 1
*/

// binary search is good because all values greater than or equal to a bad value are bad.  Binay search comparese greater than or equal and cuts the list by half each time.
// essentially searching a sorted array
const solution = function(isBadVersion) {
    return function(n){
        let [high, low, mid] = [n, 1];
        while(low <= high){
            ~~((high + low) / 2); // double bitwise NOT operator to remove decimal
            if(isBadVersion(mid)) high = mid - 1;
            else low = mid + 1;
        }
        return low; //loop relies on low being compared as binary search bounces back and forth on either side of value
    };
}