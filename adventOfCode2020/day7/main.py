f = open("test.txt", "r")
count = 0
bagSort = ['clear blue', 'bright coral', 'mirrored magenta', 'bright gray', 'muted cyan', 'dark coral', 'light blue', 'dark tomato', 'pale blue', 'pale aqua', 'shiny purple', 'shiny lime', 'dull teal', 'mirrored cyan', 'plaid plum', 'clear coral', 'light bronze', 'dull red', 'pale lime', 'pale salmon', 'posh yellow', 'bright purple', 'shiny chartreuse', 'faded white', 'vibrant blue', 'clear chartreuse', 'faded green', 'bright black', 'striped aqua', 'wavy gray', 'wavy crimson', 'dim lime', 'posh magenta', 'dim maroon', 'plaid magenta', 'muted yellow', 'bright teal', 'wavy indigo', 'shiny bronze', 'light gray', 'dark chartreuse', 'plaid maroon', 'posh bronze', 'light turquoise', 'dotted brown', 'drab olive', 'shiny red', 'posh orange', 'plaid white', 'dark fuchsia', 'vibrant beige', 'drab white', 'dim salmon', 'dark green', 'drab brown', 'shiny salmon', 'shiny lavender', 'dotted bronze', 'wavy red', 'dark turquoise', 'bright silver', 'dark bronze', 'shiny orange', 'plaid aqua', 'bright white', 'striped yellow', 'dotted indigo', 'pale tomato', 'faded black', 'light maroon', 'bright violet', 'wavy coral', 'striped teal', 'light tan', 'dark aqua', 'dim yellow', 'drab orange', 'wavy turquoise', 'dull cyan', 'dim coral', 'striped gold', 'dark beige', 'dark purple', 'dotted green', 'dim white', 'dotted fuchsia', 'dark salmon', 'dotted salmon', 'light gold', 'dull blue', 'mirrored blue', 'faded yellow', 'muted tomato', 'wavy beige', 'mirrored yellow', 'muted magenta', 'plaid salmon', 'pale black', 'light aqua', 'wavy violet', 'dark violet', 'striped salmon', 'clear salmon', 'light violet', 'drab coral', 'faded bronze', 'faded crimson', 'mirrored lavender', 'wavy gold', 'striped chartreuse', 'vibrant violet', 'posh crimson', 'dim violet', 'clear silver', 'plaid orange', 'faded red', 'clear turquoise', 'clear fuchsia', 'light green', 'dark lavender', 'vibrant salmon', 'mirrored green', 'faded lavender', 'striped olive', 'faded gold', 'dark olive', 'bright tan', 'pale olive', 'striped purple', 'dotted magenta', 'pale cyan', 'vibrant tan', 'dark crimson', 'dotted red', 'dark gold', 'wavy silver', 'dotted yellow', 'striped beige', 'mirrored gray', 'dark indigo', 'muted silver', 'bright plum', 'posh purple', 'bright brown', 'striped brown', 'dim olive', 'plaid black', 'dark red', 'light red', 'wavy cyan', 'dark tan', 'dark maroon', 'dim gray', 'clear crimson', 'vibrant aqua', 'shiny plum', 'muted purple', 'vibrant fuchsia', 'dull gray', 'clear red', 'pale maroon', 'dim silver', 'pale teal', 'faded teal', 'plaid beige', 'mirrored gold', 'posh lavender', 'striped turquoise', 'dark yellow', 'drab chartreuse', 'muted plum', 'bright green', 'wavy purple', 'vibrant tomato', 'muted tan', 'wavy black', 'posh tomato', 'pale silver', 'plaid indigo', 'light chartreuse', 'muted chartreuse', 'dark lime', 'dark orange', 'dotted gold', 'bright aqua', 'drab turquoise', 'bright red', 'vibrant crimson', 'light salmon', 'drab silver', 'dotted plum', 'muted red', 'clear cyan', 'mirrored bronze', 'pale chartreuse', 'dim blue', 'plaid coral', 'faded magenta', 'faded blue', 'mirrored olive', 'dotted white', 'muted lime', 'striped blue', 'dull tomato', 'light magenta', 'bright maroon', 'striped maroon', 'mirrored fuchsia', 'drab blue', 'wavy tan', 'pale coral', 'dotted violet', 'light olive', 'pale yellow', 'bright turquoise', 'dark magenta', 'posh tan', 'plaid lavender', 'drab cyan', 'mirrored maroon', 'plaid tan', 'dark blue', 'dim teal', 'dotted black', 'mirrored indigo', 'drab lime', 'mirrored brown', 'plaid purple', 'bright gold', 'vibrant yellow', 'clear teal', 'dotted purple', 'clear gray', 'vibrant indigo', 'mirrored plum', 'clear black', 'clear aqua', 'dull indigo', 'dim plum', 'plaid gray', 'light white', 'faded silver', 'posh indigo', 'faded chartreuse', 'posh blue', 'clear olive', 'bright orange', 'vibrant lavender', 'shiny black', 'faded fuchsia', 'dotted cyan', 'mirrored orange', 'vibrant cyan', 'dotted tomato', 'posh silver', 'dull black', 'wavy white', 'dim red', 'plaid teal', 'clear tan', 'posh turquoise', 'dotted coral', 'faded brown', 'clear plum', 'posh cyan', 'posh maroon', 'dim green', 'muted violet', 'muted white', 'mirrored purple', 'muted black', 'dim lavender', 'posh teal', 'pale plum', 'dull plum', 'shiny tan', 'striped coral', 'dull yellow', 'striped red', 'dotted teal', 'drab crimson', 'plaid lime', 'drab lavender', 'pale gold', 'mirrored white', 'pale red', 'shiny indigo', 'dotted lime', 'bright yellow', 'shiny maroon', 'drab purple', 'plaid fuchsia', 'light silver', 'drab indigo', 'dim tan', 'posh coral', 'vibrant lime', 'dotted orange', 'plaid blue', 'faded olive', 'drab maroon', 'light teal', 'posh aqua', 'plaid cyan', 'clear yellow', 'shiny blue', 'pale violet', 'vibrant white', 'light lavender', 'drab bronze', 'dim chartreuse', 'wavy aqua', 'muted coral', 'plaid gold', 'wavy orange', 'dull turquoise']
check = 1




def check_bags():
    count = 0 
    for line in f:
        bag = line.split("contain")[0]
        insideBags = line.split("contain")[1]
        # insideBags = line.split("\n")[0].split("contain")[1].split(",")


        if ( "shiny gold" in insideBags):
            count += 1
            print(bag)
            if (bag.split("bags")[0].strip() not in bagSort):
                bagSort.append(bag.split("bags")[0].strip())
            # print("Counted")
        elif (any(ext in insideBags for ext in bagSort)):
            # print("Check")
            if (bag.split("bags")[0].strip() not in bagSort):
                bagSort.append(bag.split("bags")[0].strip())
            count += 1
    return count
        

for line in f: 
    bag = line.split("contain")[0]
    insideBags = line.split("contain")[1]

    if ("shiny gold" in bag):
        print(insideBags)
        

    # print(bag)
# print(bagSort)
# print(check_bags())
