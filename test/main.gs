%include backpack/std/std

costumes "blank.svg";

onflag {
    a = LOGB(3, 27); # Should be 3
    
    b = SQUARE(264); # Should be 69696

    c = LERP(4, 10, 0.75);

    d = INVLERP(c, 4, 10); # Should give 0.75

    e = safepow(-3, 3); # Should be -27
}
