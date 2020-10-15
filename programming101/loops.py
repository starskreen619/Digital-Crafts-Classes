num1 = 1
while num1 < 10:
    print(num1)
    num1 += 1  # same as i = i + 1

print("\n")

num2 = 10
while num2 > 1:
    print(num2)
    num2 -= 1

print("\n")

username = ""
password = ""
attempts = 0
max_attempts = 3
found = False

while not found:
    username = input("Please enter your username: ")
    password = input("Please enter your password: ")
    attempts += 1

    if username == "andres" and password == "security":
        print("Welcome back to the system")
        found = True

    elif attempts == max_attempts:
        print("***Your account is locked***")
        break

    else:
        print("Try again")
