names = ["pedro", "juan", "felipe", "belo"]
extra_names = ["monica", "martha"]
new_names = names + extra_names
print(new_names)

##################################

bar = ["pb", "tornado", "cantine", "h2o", "margarita"]
bar[1:4] = ["foo", "cantina", "bar"]
#bar[1] = ("foo")
# bar[4] = ("bar")

print(bar)


##################################

other_names = ["luis", "jancarlo", "abdul", "ferni", "andres"]

while len(other_names):
    print(other_names[0])
    del (other_names[0])


print(other_names)
