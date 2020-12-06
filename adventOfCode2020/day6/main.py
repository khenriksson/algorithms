f = open("input.txt", "r")

arr = []
summed = 0


for line in f:
    if line.strip():
        arr.extend(line.split("\n")[0].split(" "))

    if not line.strip():
        test = ''.join(set(arr))
        reduced_word = ''.join(
            [char for index, char in enumerate(test) if char not in test[0:index]])
        count = len(reduced_word)
        print(count)
        print(reduced_word)
        summed += count
        arr = []
        # print(test)


print(summed)