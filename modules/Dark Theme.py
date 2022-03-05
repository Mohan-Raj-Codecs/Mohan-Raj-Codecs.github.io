import time
import subprocess as sub
import os, sys
from os.path import expanduser
theme='''

[Nippy Dark]
normal-foreground = #ffffff
normal-background = #1a1a1a
keyword-foreground = #ff7700
keyword-background = #1a1a1a
builtin-foreground = #ff1aff
builtin-background = #1a1a1a
comment-foreground = #dd0000
comment-background = #1a1a1a
string-foreground = #00aa00
string-background = #1a1a1a
definition-foreground = #0080ff
definition-background = #1a1a1a
hilite-foreground = #000000
hilite-background = gray
break-foreground = black
break-background = #ffff55
hit-foreground = #ffffff
hit-background = #009d27
error-foreground = #000000
error-background = #ff2828
context-foreground = #c0c0c0
context-background = #1a1a1a
linenumber-foreground = gray
linenumber-background = #ffffff
cursor-foreground = #ffffff
stdout-foreground = #00d5d5
stdout-background = #1a1a1a
stderr-foreground = #ff4040
stderr-background = #1a1a1a
console-foreground = #c0c0c0
console-background = #1a1a1a

'''

def s(x):
    time.sleep(float(x))
def color(x):
    if str(x)=='g':
        sub.call('color 0A',shell=True)
    elif str(x)=='r':
        sub.call('color 04',shell=True)
    elif str(x)=='w':
        sub.call('color 07',shell=True)
def cd(x,idle=False):
    x=str(x)
    if idle:
        print(x)
        new=x+'\\.idlerc'
        try:
            os.chdir(new)
        except:
            os.chdir(x)
            os.mkdir(".idlerc")
            s(0.2)
            os.chdir(new)
    else:
        os.chdir(str(x))

def apply():
    with open('config-highlight.cfg','a+') as hli:
        if hli.read().find('Nippy Dark')==-1:   #UnExpected Error Handling (Error 1)
            hli.close()
            sub.call('copy config-highlight.cfg config-highlight_old.cfg',shell=True)
            sub.call('copy config-main.cfg config-main_old.cfg',shell=True)
            with open('config-highlight.cfg','a') as hli:
                hli.write(theme)
                hli.close()
            with open('config-main.cfg','w+') as hli:
                con = ""+hli.read()
                con=con+'\n[Theme]\nname2 = Nippy Dark\ndefault = True\n'
                hli.write(con)
                hli.close()
        else:
            print("Dark Theme is ALREADY INSTALLED")
        color('g')
        print('\n\n                    Successfully Applied the Dark Theme')
        print('                    Relaunch the Python Idle to See Changes')
        s(5)
    
def dismiss():
    di=str(sub.check_output('dir',shell=True))
    if di.find('config-main_old.cfg')==-1:     #UnExpected Error Handling (Error 2)
        pass
    else :
        os.remove("config-main.cfg")
        os.remove("config-highlight.cfg")
        os.rename("config-highlight_old.cfg","config-highlight.cfg")
        os.rename("config-main_old.cfg","config-main.cfg")
    color('g')
    print("\n\n                    Sucessfully Uninstalled the Applied Theme")
    s(2)
    

#print("Current Directory: ",os.getcwd())
#cd('Lib')
#cd('idlelib')
home = expanduser("~") #expanduser from os
cd(home,True)
print(os.getcwd())


print("         1 .Apply Dark Theme")
print("         2 .Remove Dark Theme")
a=int(input("\n\nEnter the Option you want (1/2) : "))
if a==1:
    apply()
elif a==2:
    dismiss()
else:
    print('invalid input :(  ')
    color('r')
    s(3)
sub.call('exit',shell=True)





