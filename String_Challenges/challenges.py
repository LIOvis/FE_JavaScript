# Write a program that checks if the input is a string.
# Check your program using the following examples:

# isString("abc") => true
# isString(190) => false

print('\n')

def is_string(a):
    if type(a) == str:
        return True
    return False

print(is_string("abc"))
print(is_string(190))

print('\n')

# Write a program that checks if a string is blank.
# Check your program using the following examples:

# isBlankString("") => true
# isBlankString(" ") => true
# isBlankString("fjfjf") => false

def is_blank_str(a):
    if a == '' or a == ' ':
        return True
    return False

print(is_blank_str(''))
print(is_blank_str(" "))
print(is_blank_str('fjfjfj'))

print('\n')

# Write a program that capitalizes the first character of a string.
# Check your program using the following examples:

# captializeFirst("abcdef") = > "Abcdef"

def capitalize_first(a):
    if type(a) == str:
        first = a[0]
        return a.replace(first, first.upper())
    return f'{a} is not a string.'

print(capitalize_first('abcdef'))
print(capitalize_first('abcdef ghijkl'))
print(capitalize_first(88))

print('\n')