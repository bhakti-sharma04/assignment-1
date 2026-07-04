def kaprekar(num):
    while num != 6174:
        digits = str(num).zfill(4)
        desc = int("".join(sorted(digits, reverse=True)))
        asc = int("".join(sorted(digits)))

        num = desc - asc

        print(f"{desc} - {asc:04d} = {num:04d}")

    print("Kaprekar Constant reached: 6174")


n = int(input("Enter a 4-digit number: "))
kaprekar(n)