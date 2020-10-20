food = [["Corn", "Potatoes", "Tomatoes"],
        ["milk", "eggs", "cheese", "yogurt"],
        ["frozen pizza", "popsicle"]]

# print(food[0])
# print(food[1])
# print(food[2])

#########################################

categories = ["veggies", "dairy", "frozen"]
idx = 0
for category in categories:
    print("%i. %s" % (idx+1, category))
    #print(" " + str(idx+1) + ". " + category)
    i = 0
    for item in food[idx]:
        print("    %i. %s" % (i+1, item))
        #print("    " + str(i+1) + ". " + item)
        i += 1
    idx += 1
