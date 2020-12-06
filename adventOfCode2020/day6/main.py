f = open("input.txt", "r")

arr = []
summed = 0


for line in f:
    if line.strip():
        arr.extend(line.split("\n")[0].split(" "))

    if not line.strip():
        # print(arr)
        # print(len(arr))
        print(arr)
        test = ''.join(arr)
        check = test.count("a")
        # print(check,"    " ,      test)
        # print(test)
        reduced_word = ''.join(
            [char for index, char in enumerate(test) if char not in test[0:index]])
        for i in reduced_word:
            print(i, "           ", test, "          ", reduced_word)
            if (test.count(i) == len(arr)): 
                # print(test.count(i))
                print("In here")
                summed += 1
                print(summed)
        # count = len(reduced_word)
        # print(count)
        # print(reduced_word)

        arr = []
        # print(test)


print(summed)