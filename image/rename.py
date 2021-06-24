from shutil import copyfile
import os
import shutil

original_path = "PATH"

for root, dirs, files in os.walk(original_path, topdown=False):
    for name in files:
        if name[-4:] == ".png":
            filepath = os.path.join(root, name)
            print(filepath)
            new_path = filepath[:-4]+"-android.png"
            shutil.copyfile(filepath, new_path)
            new_path = filepath[:-4]+"-ios.png"
            shutil.copyfile(filepath, new_path)

