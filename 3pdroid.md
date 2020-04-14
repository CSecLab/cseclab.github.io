---
layout: page
title: 3PDroid
---
The  access  to  privacy-sensitive  information  on  Android  is  a  growing  concern  in  the  mobile  community.  Albeit Google  Play  recently  introduced  someprivacy guidelines,  it  is still  an  open  problem  to  soundly  verify  whether  apps  actuallycomply  with  such  rules.  To  this  aim,  in  this  work,  we  discuss a  novel  methodology  based  on  a  fruitful  combination  of  static analysis,  dynamic  analysis,  and  machine  learning  techniques, which  allows  assessing  such  compliance.  
More  in  detail,  our methodology checks whether each app i) contains a privacy policy that  complies  with  the  Google  Play  privacy  guidelines,  and  ii) accesses  privacy-sensitive  information  only  upon  the  acceptance of  the  policy  by  the  user.  
Furthermore,  the  methodology  also allows checking the compliance of third-party libraries embeddedin  the  apps  w.r.t.  the  same  privacy  guidelines.
We  implemented  our  methodology  in  a  tool,  **3PDroid**,  and  we carried out an assessment on a set of recent and most-downloaded Android  apps  in  the  Google  Play  Store.  
Experimental  results suggest  that  more  than  95%  of  apps  access  user’s  privacy-sensitive information, but just a negligible subset of them (≈1%) fully  complies  with  the  Google  Play  privacy  guidelines. 

### Demo and Results
For further information and for 3PDroid source code please contact <luca.verderame@dibris.unige.it>.    
The results are available [here](../data/3pdroid_results.zip). 


### The Paper
***On the (Un)Reliability of Privacy Policies in Android Apps***  
Luca Verderame, Davide Caputo, Andrea Romdhana, and Alessio Merlo  
In the Proceedings of... [PDF]()  

Please use the following bibtex entry to cite our work:

```BibTeX
@InProceedings{3pdroid,
  author = {Luca Verderame and Davide Caputo and Andrea Romdhana and Alessio Merlo},
  title = {},
  booktitle = {},
  month = {},
  year = {},
  address = {}
}
```

### Teams
- [Luca Verderame](https://www.talos-sec.com/), PostDoc, University of Genova, Italy
- [Davide Caputo](../people/davide_caputo/), Ph.D Student, University of Genova, Italy
- [Andrea Romdhana](../people/andrea_romdhana/), Ph.D Student, University of Genova, Italy
- [Alessio Merlo](../people/alessio_merlo/), Senior Assistant Professor, University of Genova, Italy