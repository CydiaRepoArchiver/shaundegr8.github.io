#!/bin/bash
dpkg-deb -bZgzip projects/LiveWallpaperPack1 debs
dpkg-deb -bZgzip projects/JarvisForSiri debs
# dpkg-deb -bZgzip projects/<Project Name> <Output Folder>