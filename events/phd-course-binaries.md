---
layout: page
title: "Introduction to reverse engineering and exploitation of binary programs"
---

*Lecturer:* prof. [Giovanni Lagorio](/people/giovanni_lagorio) (DIBRIS, Università di Genova)

# When and where
PhD course lectures:
- ~~11/12/2017 14:30-18:30, room: 710 @ [DIBRIS - Via Dodecaneso 35, I-16146, Genoa, Italy.](https://www.google.it/maps/place/Via+Dodecaneso,+35,+16146+Genova+GE/@44.403165,8.9696801,17z/data=!3m1!4b1!4m5!3m4!1s0x12d3430b2216399f:0xe215417b3e571fb4!8m2!3d44.403165!4d8.9718688?hl=en)~~
- ~~12/12/2017 14:30-18:30, room: 710 @ [DIBRIS - Via Dodecaneso 35, I-16146, Genoa, Italy.](https://www.google.it/maps/place/Via+Dodecaneso,+35,+16146+Genova+GE/@44.403165,8.9696801,17z/data=!3m1!4b1!4m5!3m4!1s0x12d3430b2216399f:0xe215417b3e571fb4!8m2!3d44.403165!4d8.9718688?hl=en)~~
- ~~13/12/2017 14:00-18:00, room: 710 @ [DIBRIS - Via Dodecaneso 35, I-16146, Genoa, Italy.](https://www.google.it/maps/place/Via+Dodecaneso,+35,+16146+Genova+GE/@44.403165,8.9696801,17z/data=!3m1!4b1!4m5!3m4!1s0x12d3430b2216399f:0xe215417b3e571fb4!8m2!3d44.403165!4d8.9718688?hl=en)~~
- ~~18/12/2017 14:00-18:00, room: 710 @ [DIBRIS - Via Dodecaneso 35, I-16146, Genoa, Italy.](https://www.google.it/maps/place/Via+Dodecaneso,+35,+16146+Genova+GE/@44.403165,8.9696801,17z/data=!3m1!4b1!4m5!3m4!1s0x12d3430b2216399f:0xe215417b3e571fb4!8m2!3d44.403165!4d8.9718688?hl=en)~~

# Abstract
The course introduces techniques and tools to reverse engineer and exploit x86/64 binary programs.

This course has a strong hands-on approach; proficiency in low-level C programming, and familiarity with operating system concepts are a must.
Lectures will contain practical activities, therefore participants need to bring their own Linux laptops and set them up appropriately.

The exam consists in the exploitation of some 32/64-bit programs (a different set for each student), and a subsequent discussion of the used techniques and tools.

# Laptop (VM?) setup
Assuming a Debian-based distro (examples tested on Ubuntu 16.04); tools:
* [Radare2](http://www.radare.org/r/), my [.radare2rc](https://ghostbin.com/paste/xywks)
* [Pwntools](https://github.com/Gallopsled/pwntools#readme)
* [Ropper](https://github.com/sashs/Ropper)
* [Libformatstr](https://github.com/hellman/libformatstr)
* [American Fuzzer Lop](http://lcamtuf.coredump.cx/afl/)

[Installation instructions](https://ghostbin.com/paste/ayf9g) (except for AFL; just download the [latest version](http://lcamtuf.coredump.cx/afl/releases/afl-latest.tgz) and follow the [quickstart guide](http://lcamtuf.coredump.cx/afl/QuickStartGuide.txt))

# Course contents and materials
The [playlist](https://www.youtube.com/playlist?list=PLR11TQ3H_K1uRaoCvgdoldzLmksw9D06B) of the lectures (in Italian) is available on Youtube.

* x86/x64 Assembly
  * Topics:
    * Introduction
    * x86 and x65 ISA
    * ELF and System V ABI
    * Compilation and linking process
    * Library Interposition
    * Process tracing
  * [Slides](https://bart.disi.unige.it/zxgio/phd-course-2017/x86intro_slides.pdf)
  * [Files](https://bart.disi.unige.it/zxgio/phd-course-2017/x86intro_files.tgz)
  * Lectures on Youtube: [Part 1](https://www.youtube.com/watch?v=cZPPF4z21A8), [Part 2](https://www.youtube.com/watch?v=ffrtzZ0QwVM), [Part 3](https://www.youtube.com/watch?v=N2VNq-cWHPU) and [Part 4](https://www.youtube.com/watch?v=zwUYxLYJWhQ)
* Binary Reversing
  * Topics:
    * Introduction
    * Radare: The good, the bad and the ugly
    * ASLR
    * Suggested workflow
    * IOLI Crackmes
  * [Slides](https://bart.disi.unige.it/zxgio/phd-course-2017/reversing_slides.pdf)
  * [Files](https://bart.disi.unige.it/zxgio/phd-course-2017/reversing_files.tgz)
  * Lecture on Youtube: [Part 5](https://www.youtube.com/watch?v=u6GEM5R5u9E)
* Binary Exploitation
  * Topics:
    * Pwntools
    * Memory corruption attacks
    * Stack Canaries
    * Non-executable stack
      * Format-string attacks
      * ROP
    * Address-Space Layout Randomization
  * [Slides](https://bart.disi.unige.it/zxgio/phd-course-2017/exploitation_slides.pdf)
  * [Files](https://bart.disi.unige.it/zxgio/phd-course-2017/exploitation_files.tgz)
  * Lectures on Youtube: [Part 6](https://www.youtube.com/watch?v=DhE9e-pVQ-o), [Part 7](https://www.youtube.com/watch?v=8gkr0i6JZtY), [Part 8](https://www.youtube.com/watch?v=SwYPRXW9u3Q), [Part 9](https://www.youtube.com/watch?v=IICGJfqg_Jc), [Part 10 (incomplete due to network error during streaming; we'll record it again)](https://www.youtube.com/watch?v=Fx7SKyOig_s&list=PLR11TQ3H_K1uRaoCvgdoldzLmksw9D06B&index=10), [Part 11](https://www.youtube.com/watch?v=bPhos_kmxR0&list=PLR11TQ3H_K1uRaoCvgdoldzLmksw9D06B&index=11) and [Part 12](https://www.youtube.com/watch?v=xDQp4GNL7h0&list=PLR11TQ3H_K1uRaoCvgdoldzLmksw9D06B&index=12)
* Fuzzing
  * Topics:
    * Introduction
    * Installation and configuration
    * Using AFL
  * [Slides](https://bart.disi.unige.it/zxgio/phd-course-2017/fuzzing_slides.pdf)
  * [Files](https://bart.disi.unige.it/zxgio/phd-course-2017/fuzzing_files.tgz)
  * Lectures on Youtube: [Part 13](https://www.youtube.com/watch?v=ZPg-w6OIUnw&list=PLR11TQ3H_K1uRaoCvgdoldzLmksw9D06B&index=13)

