#!/bin/bash
dpkg-deb -bZgzip projects/LiveWallpaperPack1 debs
dpkg-deb -bZgzip projects/JarvisForSiri debs
dpkg-deb -bZgzip projects/OriginalSiriSounds debs
dpkg-deb -bZgzip projects/Gotham8 debs
dpkg-deb -bZgzip projects/AppleReversal debs
dpkg-deb -bZgzip projects/AppleDefault6 debs
dpkg-deb -bZgzip projects/AppleOriginal6+ debs
dpkg-deb -bZgzip projects/AppleReversal2 debs
dpkg-deb -bZgzip projects/AppleReversal6 debs
dpkg-deb -bZgzip projects/AppleReversal6Part2 debs
dpkg-deb -bZgzip projects/GoFYourself debs
dpkg-deb -bZgzip projects/GoFYourselfReverse debs
dpkg-deb -bZgzip projects/SteveMach debs

# dpkg-deb -bZgzip projects/<Project Name> <Output Folder>
