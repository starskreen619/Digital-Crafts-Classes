movie_stars = ["freeman", "pit", "cruise"]

i = 0
while i < len(movie_stars):
    # +1 adds 1 to the index so it wont start on 0
    print(i + 1, movie_stars[i])
    i += 1

#####################################

for stars in range(len(movie_stars)):
    print(stars, movie_stars[stars])

#####################################

number_list = [1, 6, 8, 9]

result = 0

print(number_list[1]*number_list[3])
