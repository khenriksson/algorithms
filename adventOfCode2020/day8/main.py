f = open("input.txt", "r")
visited = []
acc = 0

def choose(value, count):
    if (value) > 0:
        # print(value) 
        # print(count)
        return value + count
    else:
        return count - value

def offset(value):
    if (value > 0):
        return value - 1
    else:
        return value + 1




def readFile(f):
    arr = []
    for line in f:
        arr.append(line.split("\n")[0])
    return arr



i = 0
reading = readFile(f)
print(reading)
for line in reading:
    print(i)
    cmd = reading[i].split(" ")[0]

    value = int(reading[i].split(" ")[1])
    print(value)

    if (value < 0):
        print("less than zero")

  

    if i not in visited:
        if (cmd == 'nop'):
            visited.append(i)
            i += 1
            continue
        elif (cmd == 'acc'):
            visited.append(i)
            i += 1
            acc +=  value
        elif (cmd =='jmp'):
            visited.append(i)
            i += value


            
            
  


print(acc, visited)