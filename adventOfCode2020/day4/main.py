f = open("input.txt", "r")

count = 0
testList = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
arr = []
total = 0
colors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth",]
for line in f:
    
    if line.strip():
        arr.extend(line.split("\n")[0].split(" "))


    if not line.strip():
        # print(arr)

        newArr = []
        trues = []
        for x in arr:
            # print(x)
            # print(x.split(":"))
            split = x.split(":")
            print(split[0])
            if split[0] == "byr" and (int(split[1]) >=1920 and int(split[1]) <= 2002):
                trues.append(True)
            elif split[0] == "iyr" and (int(split[1]) >= 2010 and int(split[1]) <=2020): 
                trues.append(True)
            elif split[0] == "eyr" and (int(split[1]) >= 2020 and int(split[1]) <=2030):
                trues.append(True)
            elif split[0] =="hgt":
                if (len(split[1]) == 5):
                    if "cm" in split[1]:
                        test1 = split[1].split("cm")
                        if (int(test1[0]) >= 150 and int(test1[0]) <= 193):
                          trues.append(True)
                    elif "in" in split[1]:
                        trues.append(False)
                elif (len(split[1] ) == 4):
                    if "in" in split[1]:
                        test1 = split[1].split("in")
                        if ( int(test1[0]) >= 59 and int(test1[0]) <= 76 ):
                            trues.append(True)
                    elif "cm" in split[1]:
                        trues.append(False)

            elif split[0] =="hcl" and split[1][0] == "#" and len(split[1])==7:
                trues.append(True)
            elif split[0] =="ecl":
                for i in colors:
                    if (split[1] == i):
                        trues.append(True)
            elif split[0] =="pid":

                if split[1].isdigit() and len(split[1]) == 9:
                    
                    trues.append(True)
            
            
                    


        # print(newArr)
        # result =  all(elem in newArr  for elem in testList)
        if (len(trues) == 7 and all(elem == True for elem in trues)):
            count += 1

            # print("Missing       " , newArr)
        arr = []

print(count)

