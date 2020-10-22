pet_name = input("What is your pet's name?")

if len(pet_name) < 3:
    print("The name length is too short")
if len(pet_name) >= 3:
    print("AWWWW sweet " + pet_name)

if pet_name == "shadow":
    print("El gato Diablo!")
if pet_name == "Daisy":
    print("Good dog!")
else:
    print("What kind of name is that for a pet?")
