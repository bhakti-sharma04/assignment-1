import tkinter as tk
import csv

def save_data():
    name = name_entry.get()
    mobile = mobile_entry.get()
    email = email_entry.get()

    data=[name,mobile,email]

    with open("book.csv","a",newline="") as file:
        writer =csv.writer(file)
        writer.writerow(data)

        name_entry.delete(0, tk.END)
        mobile_entry.delete(0, tk.END)
        email_entry.delete(0, tk.END)

root= tk.Tk()
root.title("book")
root.geometry("350x250")

name_Label=tk.Label(root,text="name").grid(row=1,column=0,padx=10)
mobile_Label=tk.Label(root,text="mobile").grid(row=2,column=0,padx=10)
email_Label=tk.Label(root,text="email").grid(row=3,column=0,padx=10)

name_entry=tk.Entry(root , width=24)
mobile_entry=tk.Entry(root , width=24)
email_entry=tk.Entry(root , width=24)

name_entry.grid(row=1,column=1)
mobile_entry.grid(row=2,column=1)
email_entry.grid(row=3,column=1)

Button =tk.Button(root,text="save",command=save_data).grid(row=3,column=1,padx=20)

root.mainloop()