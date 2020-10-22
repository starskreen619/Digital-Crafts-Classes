# class person:
#     def __init__(self, name, age, height="normal"):
#         print(self)
#         print("you created a new instance of person")
#         self.name = name
#         self.age = age
#         self.height = height


# clint = person("clint", 38, "short")
# print(f"wow {clint.name} is {clint.age} years old and {clint.height}")


# Create a program that has a class named Vehicle.

# Make the Vehicle have a 'category' which can be anything like, sport, truck, motorcycle, minivan.

# Make the Vehicle class have 'wheels' as an attribute.

# Make the Vehicle class have 4 as the default value for the class.

# Create 5 different instances of the class with at least one being a motorcycle.

class Vehicle:
    def __init__(self, category, wheels=4):
        self.category = category
        self.wheels = wheels


chevy = Vehicle("minivan", 6)
ford = Vehicle("Sport")
harley = Vehicle("motorcycle", 2)
mazda = Vehicle("minivan")
audi = Vehicle("sport")

print(f"the car is a {ford.category} and has {ford.wheels} wheels")
