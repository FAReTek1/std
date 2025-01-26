# std.gs
This is a standard library which is built upon the orignal [goboscript](https://github.com/aspizu/goboscript) standard library.
It is being made to be used with [backpack](https://github.com/aspizu/backpack)

## Installation
To use this, make sure to install [backpack](https://github.com/aspizu/backpack)

You can use the standard library by adding these lines to goboscript.toml:
```toml
[dependencies]
dependencyName = "https://github.com/FAReTek1/std@<the version you want to use>"
```

Then, add this %include to your gs file:
```rs
%include backpack/std/std/<std module you want to use>.gs
```
you can also use this to just %include everything
```rs
%include backpack/std/std/__init__.gs
```
