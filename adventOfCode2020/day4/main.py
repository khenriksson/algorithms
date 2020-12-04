f = open("input.txt", "r")

count = 0
testList = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
arr = []
total = 0

for line in f:
    
    if line.strip():
        arr.extend(line.split("\n")[0].split(" "))


    if not line.strip():
        print(arr)

        newArr = []
        
        for x in arr:

            
            for y in x.split(":"):

                if y == "byr" or y == "iyr" or y == "eyr" or y =="hgt" or y =="hcl" or y =="ecl" or y =="pid":
                    newArr.append(y)
                    

        newArr.sort()
        # print(newArr)
        result =  all(elem in newArr  for elem in testList)
        if result:
            count += 1
        else:
            print("Missing       " , newArr)
        arr = []

print(count)

