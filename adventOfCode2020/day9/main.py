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
        # print(count)
        if (count < preamble): continue
        checkArr = arr[count-preamble: count]
        results = pair_sum(checkArr)
        if number not in results:
            print("not", number)
            break
        # print(number)

# invalid(arr)

# def doStuff():
#     for preamble, count in enumerate(arr):
#         if preamble + 1 >= len(arr): break
#         newSum = arr[preamble-24: preamble +1]
#         sums.append(newSum)
#         preamble +=1
    
# def modifyArr():
#     i = 0
#     returnArr = []
#     for i in range(i, len(arr)):
#         returnArr.append(pair_sum(sums[i]))
#     return returnArr   


# doStuff()
# modifyArr()

# def doCheck(fullSums):
#     print(fullSums)
#     for i in range(preamble , len(arr)):
#         if (arr[i] not in  fullSums[i]):
#             print(sums[i])
#             print("not", arr[i], i)
#             break
            


# fullArr = modifyArr()

# doCheck(fullArr)

    


