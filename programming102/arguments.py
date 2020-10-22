def multi(a, b):
    if type(a) == int and type(b) == int:
        print(a*b)
    else:
        print("You need to enter a valid argument.")


multi(8, 4)
multi("r", "t")
multi(1, 4)


########################################


# def movies(Title, Genre, Year):
#     print(f"1. Title : {Title}")
#     print(f"2. Genre : {Genre}")
#     print(f"3. Year : {Year}")


# movies(["andres", "action", "1979"])


#########################################

def movie(movie_item):
    title = movie_item[0]
    genre = movie_item[1]
    year = movie_item[2]

    print(f"1. Title : {title}")
    print(f"2. Genre : {genre}")
    print(f"3. Year : {year}")


movie(["andres", "action", "1979"])
