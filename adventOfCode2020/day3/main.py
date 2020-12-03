f = open("input2.txt", "r")
right = 0
# count = 0
right2 = 0
count2 = 0
count3=0
right3=0



# for x in f:
#     # print(x)
#     right += 3

#     # print(len(x))
#     # print(right)
#      # from 0 to 10 index

#     print(x, "      ", len(x))
#     line = x.split("\n")[0]
#     # print(line, "      ", len(line))
#     if (right >= len(line)):
#         right = right - len(line)
#     if (line[right] == "#"):

#         count += 1

    
next(f)
next(f)

for count, y in enumerate(f, start=2):

    right2 += 1
    if count % 2 == 0:
        print(y)
        line = y.split("\n")[0]

        if (right2 >= len(line)):
            right2 = right2 - len(line)
        if (line[right2] == "#"):
            count2 += 1


# for count, y in enumerate(f, start=1):
#     right3 += 3
#     line = y.split("\n")[0]

#     if (right3 >= len(line)):
#         right3 = right3 - len(line)
#     if (line[right3] == "#"):
#         count3 += 1



# for y in f:
#     # print(x)
#     if (y )
#     print(y)
#     right2 += 1

    
#     line = y.split("\n")[0]
#     # print(line, "      ", len(line))
#     if (right2 >= len(line)):
#         right2 = right2 - len(line)
#     if (line[right2] == "#"):
#         count2 += 1

    
#214
#94
#99
#91
#52
print(214*94*99*91*47)
#F
# print(count)
# print(right2)
print(count2)

