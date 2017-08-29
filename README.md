# CSecLab WebSite

[cseclab.github.io](https://cseclab.github.io)

## Adding a page

* [If you never did it before] Clone the whole repository

    `git clone https://github.com/CSecLab/cseclab.github.io.git`

    *or*

    `git clone git@github.com:CSecLab/cseclab.github.io.git`
    (you need to deploy your SSH Key on GitHub)

* Switch to *jekyll* branch

`git checkout jekyll`

* Update your repository

`git pull origin jekyll`

* Create a file named `name_surname.md` with this template:
```
---
layout: page
title: Page title
---

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
...

# Ordered lists

1. First element in _italics_ or *italics*
2. Second element in __bold__ or **bold**
...

# Unordered list

* An element
* Another element

# Links and images

[Link text](http://link.address.com/path/to/page)
![Image alt text](http://images.address.com/image.jpg)

```
The complete Git Flavoured Markdown syntax can be found [here](https://guides.github.com/features/mastering-markdown/)

* Customize the file as you see fit
* Add the file to the repository

`git add name_surname.md`

* Commit the file 

`git commit -m "Add Homepage for Nome Cognome"`

* Commit the file 

`git push origin jekyll`

* Check [cseclab-wip.herokuapp.com](https://cseclab-wip.herokuapp.com)
