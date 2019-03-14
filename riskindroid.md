---
layout: page
title: RiskInDroid
---

**RiskInDroid** (**Ri**sk **In**dex for An**droid**) is a tool for quantitative risk analysis of Android applications written in Java (used to check the permissions of the apps) and Python (used to compute a risk value based on apps' permissions). The tool uses classification techniques through *scikit-learn*, a machine learning library for Python, in order to generate a numeric risk value between 0 and 100 for a given app. In particular, the following classifiers of *scikit-learn* are used in **RiskInDroid** (this list is chosen after extensive empirical assessments):
* Support Vector Machines (SVM)
* Multinomial Naive Bayes (MNB)
* Gradient Boosting (GB)
* Logistic Regression (LR)

Unlike other tools, **RiskInDroid** does not take into consideration only the permissions declared into the app manifest, but carries out reverse engineering on the apps to retrieve the bytecode and then infers (through static analysis) which permissions are actually used and which not, extracting in this way 4 sets of permissions for every analyzed app:
* Declared permissions - extracted from the app manifest
* Exploited permissions - declared and actually used in the bytecode
* Ghost permissions - not declared but with usages in the bytecode
* Useless permissions - declared but never used in the bytecode

From the above sets of permissions (and considering only the official list of Android permissions), feature vectors (made by `0`s and `1`s) are built and given to the classifiers, which then compute a risk value. The precision and the reliability of **RiskInDroid** have been empirically tested on a dataset made of more than 6K malware samples and 112K apps.

### Publications

* A. Merlo, G.C. Georgiu. "[RiskInDroid: Machine Learning-based Risk Analysis on Android](https://github.com/ClaudiuGeorgiu/RiskInDroid/raw/master/RiskInDroid_paper.pdf)" ([official pubblication link](https://link.springer.com/chapter/10.1007/978-3-319-58469-0_36)), in *Proc. of the 32nd International Conference on ICT Systems Security and Privacy Protection* ([IFIP-SEC 2017](http://www.ifipsec.org/)).

### Demo

If you want to quickly see the tool in action, visit [https://www.riskindroid.com](https://www.riskindroid.com) to browse the full experimental results and calculate the risk of other apps, otherwise visit [https://github.com/ClaudiuGeorgiu/RiskInDroid](https://github.com/ClaudiuGeorgiu/RiskInDroid) to view the source code or to install **RiskInDroid** on your own computer.
