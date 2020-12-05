import math
f = open("input.txt", "r")
check = 0
allIds = []
highest = 0
def id(number, column):
    return number*8+column

def split(word): 
    return [char for char in word]  

for x in f:
    line = split(x)
    first = float(0)
    last = float(127)
    columnFirst = float(0)
    columnLast = float(7)
    row = 0
    column = 0
    
    for letter in line[0:8]:
        # print(letter, "      ", "first" , "       ",first)
        # print(letter, "      ","last", "       " ,last)
        if first == last: 
            row = first
            continue
        if letter == "F":
            last = math.floor((first + last)/2)
        elif letter == "B":
            first = math.ceil((first + last)/2)
    for letter in line[7:11]:
        if columnFirst == columnLast: 
            column = columnFirst
            continue
        if letter == "L":
            columnLast = math.floor((columnFirst + columnLast)/2)
        elif letter == "R":
            columnFirst = math.ceil((columnFirst + columnLast)/2)
    if (id(row, column) > highest): highest = id(row,column)
    allIds.append(int(id(row,column)))


def find_missing(lst): 
    return [x for x in range(lst[0], lst[-1]+1)  
                               if x not in lst]

allIds.sort()

print(find_missing(allIds))
    

print(allIds)
print(highest)