import itertools
f = open("input.txt" , "r")

def load():
    arr = []
    for line in f:
        arr.append(int(line))

    return arr



def pair_sum(preambleArr):
    newArr = preambleArr
    sums = []

    for i in range(0, len(preambleArr)):
        for j in range(1, len(preambleArr)):
            result = newArr[i] + newArr[j]
            if result not in sums:
                sums.append(newArr[i] + newArr[j])
    return sums


# testArr = [4,10,17,48,18,24,14,33,6,34,47,29,2,38,45,27,40,22,43,35,49,5,1,9,3]
# check = pair_sum(testArr)

# print(check)






i = 0
arr = load()
# print(len(arr))
# print(arr)
preamble = 25
# invalid number = 70639851

def invalid(arr):
    for count, number in enumerate(arr, start=0): # Doesn't take into account last
        if (count < preamble): continue
        checkArr = arr[count-preamble: count]
        results = pair_sum(checkArr)
        if number not in results:
            print("not", number)
            break

def subArraySum(arr, n, sum): 
      
    # Pick a starting  
    # point 
    for i in range(n): 
        curr_sum = arr[i] 
      
        # try all subarrays
        # starting with 'i'
        j = i + 1
        while j <= n: 
          
            if curr_sum == sum: 
                print ("Sum found between") 
                print("indexes % d and % d"%( arr[i], arr[j-1])) 
                print("indexes % d and % d"%( i, j-1)) 
                
                print("max", max(arr[i:j-1]))
                print("min", min(arr[i:j-1]))
                print(max(arr[i:j-1])+min(arr[i:j-1]))
                return 1
                  
            if curr_sum > sum or j == n: 
                break
              
            curr_sum = curr_sum + arr[j] 
            j += 1
  
    print ("No subarray found") 
    return 0


invalid(arr)
subArraySum(arr, len(arr), 70639851)
f.close()
    


