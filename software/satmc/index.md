--- 
layout: page
title: SATMC: a SAT-based Model-Checker for Security Protocols
---

# SATMC: a SAT-based Model-Checker for Security Protocols

Even under the assumption of perfect cryptography, the design of security protocols is notoriously error-prone. Many published protocols have been implemented and deployed in real applications only to be found flawed years later. The problem is that often security protocols hide subtle flaws that are difficult to detect by a human inspection.

*   **Approach:** SATMC reduces the problem of checking whether a protocol is vulnerable to attacks of bounded length to the satisfiability of a propositional formula which is then solved by a state-of-the-art SAT solver. This is done by combining a reduction technique of protocol insecurity problems to planning problems and SAT-reduction techniques developed for planning and LTL that allows for leveraging state-of-the-art SAT solvers.
*   **Features:** SATMC provides a number of distinguishing features, including the ability to
    *   check the protocol against complex temporal properties (e.g. fair exchange);
    *   analyze protocols (e.g. browser-based protocols) that assume messages are carried over _secure channels_ (e.g. SSL/TLS channels).
*   **Success Stories:** SATMC has been used to detect
    *   a [serious vulnerability](http://www.ai-lab.it/armando/GoogleSSOVulnerability.html) on the [SAML-based Single Sign-On service for Google Apps](http://code.google.com/apis/apps/sso/saml_reference_implementation.html);
    *   a flaw in a "patched" version of the Asokan, Weidner, Shoup protocol for optimistic fair exchange \[[csf2007](publications.html#csf2007)\];
    *   an authentication flaw in the SAML 2.0 Web Browser SSO Profile \[[sec2011](publications.html#sec2011)\].SATMC has also been used by SAP Research to perform a complete formal analysis of the SAP NetWeaver SAML Next Generation Single Sign-On.
*   **Usage:** SATMC is used in several advanced research prototypes and industrial tools:
    *   SATMC is one of the back-ends of the [AVISPA Tool](http://www.avispa-project.org) and of the [AVANTSSAR Platform](http://www.avantssar.eu).
    *   SATMC is used as an automated testcase generator in [Tookan](http://secgroup.ext.dsi.unive.it/tookan), a tool for analysing PKCS#11 security tokens;
    *   SATMC lies at the core of a Security Validator for business processes developed by SAP Research which is currently being experimented within [SAP Netweaver BPM](http://www.sap.com/platform/netweaver/components/sapnetweaverbpm/index.epx).
