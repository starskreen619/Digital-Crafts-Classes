person = "Andres"
today = "Tuesday"
emotion = "sad"

fstring = f'Hello {person},\nI hope that your {today} is going well.\nI am personally really {emotion}.'
print(fstring)

haiku = ("Hello %s,\nI hope that your %s is going well.\nI am personally really %s." % (person, today, emotion))
print(haiku)

conbining_string = "Hello " + person + ",\n" + "I hope that your " + today + "is going well.\n" + "I am personally really " + emotion + "."
print(conbining_string)