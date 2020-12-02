import re

f = open("passwords.txt", "r")
total = 0
total2 = 0

# check = f.readline().split()[2]
# print(check)


for x in f:
    test = x.split()

    first = x.split()[2]
    second=x.split()[1][0]
    test1 = test[0].split("-")

    fNumber = int(test1[0])
    sNumber = int(test1[1])

    word =  x.split()[2]
    letter = x.split()[1][0]
    # print("s", s)
    # a, b, c = re.split(r"([a-z])", f[1], 1, flags=re.I)
    count = first.count(second)
    if (count >= int(test1[0]) and count <= int(test1[1])): 
        # print(int(f[0]))
        # print(int(f[1]))
        # print(count)
        total += 1 

    length = len(word)
    print(length < sNumber)
    if (word[fNumber-1] == letter and word[sNumber-1] != letter):
        total2 += 1
    elif(word[sNumber-1] == letter and word[fNumber-1] != letter):
        total2+=1
   

    # print(f[0])
    # print(count)
    

print(total)
print(total2)




    # print(test)
    # print("a", a)
