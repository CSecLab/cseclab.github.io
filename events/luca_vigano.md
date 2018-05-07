---
layout: page
title: "Alpha-Beta Privacy (a novel and declarative way to reason about privacy)"
---

*TITLE:* **Alpha-Beta Privacy (a novel and declarative way to reason about privacy)**

*SPEAKER:* prof. Luca Viganò (King's College, London)

*WHEN:* Friday, May 18, 2018

*WHERE:* DIBRIS, Università di Genova, Aula 710, Via Dodecaneso, 35 - Genova

*ABSTRACT:* Formally specifying privacy goals is not trivial. The most widely used approach in formal methods is based on the static equivalence of frames in the applied pi-calculus, basically asking whether or not the intruder is able to distinguish two given worlds. A subtle question is how we can be sure that we have specified all pairs of worlds to properly reflect our intuitive privacy goal. To address this problem, we introduce a novel and declarative way to specify privacy goals, called "alpha-beta privacy", and relate it to static equivalence. This new approach is based on specifying two formulae alpha and beta in first-order logic with Herbrand universes, where alpha reflects the intentionally released information and beta includes the actual cryptographic ("technical") messages the intruder can see. Then alpha-beta privacy means that the intruder cannot derive any "non-technical" statement from beta that he cannot derive from alpha already. We describe by a variety of examples how this notion can be used in practice. Even though alpha-beta privacy does not directly contain a notion of distinguishing between worlds, there is a close relationship to static equivalence of frames that we investigate formally. This allows us to justify (and criticize) the specifications that are currently used in verification tools, and obtain partial tool support for alpha-beta privacy. 


*Short bio of the speaker:* Luca Viganò is Vice Dean (External Relations) of the Faculty of Natural & Mathematical Sciences at King’s College London and Professor of Computer Science at the Department of Informatics, where he heads the Cybersecurity group.
His research focuses on formal methods and tools for the design, modelling, analysis, verification and testing of networks and systems in order to tackle cybersecurity and privacy problems that are important to industry, society and everyone living in a technologically dependent world.


