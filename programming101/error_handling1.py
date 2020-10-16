num1 = input("Please enter a number: ")

try:
    int_num1 = int(num1)
    print("The number is " + num1)

except ValueError:
    print("You didn't input a valid number")
