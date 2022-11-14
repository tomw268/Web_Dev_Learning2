# Band name generator
print("Helllo World")

print("Day 1 - Python Print Function")
print("The function is declared like this:")
print("print('what to print')")

# create new lines
print("Hello World!\nHelloWorld!")

# concstenation of strings
print("hello" + " " + "Tom")

print("Hello " + input("What is your name"))

# Prints the length of the input
print(len(input("what is your name!")))


# 🚨 Don't change the code below 👇
a = input("a: ")
b = input("b: ")
# 🚨 Don't change the code above 👆

####################################
# Write your code below this line 👇

c = a
a = b
b = c

# Write your code above this line 👆
####################################

# 🚨 Don't change the code below 👇
print("a: " + a)
print("b: " + b)


# Band name generator project
# 1. Create a greeting for your program.
print("Welcome to Band Name Genartor")
# 2. Ask the user for the city that they grew up in.

town = input("What town did you grow up in? \n")
# 3. Ask the user for the name of a pet.

pet = input("Name of your pet? \n")
# 4. Combine the name of their city and pet and show them their band name.
print(town + " " + pet)
