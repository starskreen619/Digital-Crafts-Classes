# class Mob:
#       def __init__(self, name, health=10, attack_power=2):
#           self.name = name
#           self.health = health
#           self.attack_power = attack_power  # added

#       ...  # get_hit from previous examples

#       def attack(self, enemy):
#           # using another class instances methods
#           print("I am attacking %s for %s power" %
#                 (enemy.name, self.attack_power))
#           enemy.get_hit(self.attack_power)

#   hero = Mob("Sir Galahand", 20,3)
#   bad_guy = Mob('Evil McEvil', 10)

#   hero.attack(bad_guy)
#   bad_guy.attack(hero)

############################################

class Vehicle:
    def __init__(self, acceleration, top_speed, wheels=4):
        self.wheels = wheels
        self.speed = 0
        self.top_speed = top_speed
        self.position = 0
        self.acceleration = acceleration
        # self.stats = []                  this creates the stats list                                 to store

    def move(self):
        self.accelerate()
        self.position = self.position + self.speed  # or self.position += self.speed
        print(f" {car} - {cars[car].position}")
        # self.stats[-1].append({"speed": self.speed, "position": self.position})                            added to move so it stores info into self.stats   the [-1]stores at the end of the list.

    def accelerate(self):
        potential = self.speed + self.acceleration
        if self.top_speed >= potential:
            self.speed = self.top_speed

    # def distance(self):
    #     self.position = self.speed \ 3600
    #     print(f"{self.category} has gone {self.distance} miles")


cars = {
    "chevy": Vehicle(5, 60),
    "ford": Vehicle(10, 100),
    "harley": Vehicle(20, 120)
}

print("20 second run")

for i in range(21):
    print(f"**********second {i}**************")
    for car in cars:
        cars[car].move()


# for car in cars:              This block prints "stats" from self.stats
#     print(f" {car}: ")
#     print(cars[car].stats)
