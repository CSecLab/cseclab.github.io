---
layout: page
title: ARMANDroid
---

App repackaging refers to the practice of customizing an existing mobile app and redistributing it in the wild to fool the final user into installing the repackaged app instead of the original one. In this way, an attacker can embed malicious payload into a legitimate app for different aims, such as access to premium features, redirect revenue, or access to user’s private data. 

In the Android ecosystem, apps are available on public stores, and the only requirement for an app to execute properly is to be digitally signed. Due to this, the repackaging threat is widely spread. Anti-repackaging techniques aim to make harder the repackaging process for anattack adding logical controls - called detection node - in the app at compile-time. Such controls check the app integrity at runtime to detect tampering. If tampering is recognized, the detection nodes lead the repackaged app to fail (e.g., throwing an exception). 

From an attacker’s standpoint, she must detect and bypass all controls to repackage safely. We propose a novel anti-repackaging scheme - called **ARMAND** (**A**nti-**R**epackaging through **M**ulti-pattern **A**nti-tampering based on **N**ative **D**etection) - which aims to overcome the limitations of the current protection schemes. We have implemented this scheme into a prototype - named **ARMANDroid** - for Android ecosystems, which leverages multiple protection patterns and relies on native code.
{: style="text-align: justify"}

### Tool

The original docker image is available on [DockerHub](https://hub.docker.com/r/totor13/armand)

The **ARMANDroid** jar library and Dockerfile are available on [Github](https://github.com/Mobile-IoT-Security-Lab/ARMANDroid).

For more information please contact luca.verderame(A)dibris.unige.it.
{: style="text-align: justify"}

### The Paper

We submit our paper - ***ARMAND (Anti-Repackaging through Multi-pattern Anti-tampering based on Native Detection)*** - for consideration to [PMC journal](https://www.journals.elsevier.com/pervasive-and-mobile-computing).
{: style="text-align: justify"}

Curently, ***ARMAND (Anti-Repackaging through Multi-pattern Anti-tampering based on Native Detection)*** can be found on [arXiv](https://arxiv.org/abs/2012.09292).
{: style="text-align: justify"}

### Team

- [Alessio Merlo](../people/alessio_merlo/), Associate Professor, University of Genova, Italy
- [Luigi Sciolla](https://github.com/Killuaa27/) - Developer
- [Antonio Ruggia](../people/antonio_ruggia) - Core Developer
- [Luca Verderame](../people/luca_verderame/), PostDoc, University of Genova, Italy
